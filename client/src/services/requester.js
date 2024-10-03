const baseURL = 'https://vanimi-supermarket.onrender.com';
// const baseURL = 'http://localhost:3000';

async function request(url, option) {

    try {
        const response = await fetch(baseURL + url, option);

        // Проверяваме дали отговорът е успешен
        if (!response.ok) {
            const contentType = response.headers.get('content-type');
            let errorData;
            
            // Прочитаме само веднъж, ако има JSON данни или текстови данни
            if (contentType && contentType.includes('application/json')) {
                errorData = await response.json();
            } else {
                errorData = await response.text();
            }
            
            throw new Error(errorData.message || 'Грешка при заявката');
        }

        // Ако отговорът е 204 (No Content), връщаме response обект
        if (response.status === 204) {
            return response;
        }

        // Прочитаме съдържанието на отговора само веднъж
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();  // Връщаме JSON данните
        } else {
            return response.text();  // Връщаме текстови данни
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }

    // try {

    //     const response = await fetch(baseURL + url, option);
        
    //     if (response.ok !== true) {
    //         const err = await response.json();
    //         // throw new Error(err.message);
    //     }

    //     if (response.status === 204) {
    //         return response;
    //     } else if (response.headers.has('content-type') && response.headers.get('content-type').includes('application/json')) {
    //         return response.json();
    //     } else {
    //         return response.text();
    //     }

    // } catch (error) {
    //     alert(error.message);
    //     throw error;
    // }

}

function createOption(method = 'get', data) {

    const option = {
        method,
        headers: {}
    };
    if (data !== undefined) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }
    return option;
}

export function get(url) {
    return request(url, createOption());
}

export function post(url, data) {
    return request(url, createOption('post', data));
}

export function put(url, data) {
    return request(url, createOption('put', data));
}

export function del(url) {
    return request(url, createOption('delete'));
}