const baseURL = 'http://localhost:3000';

async function request(url, option) {

    try {

        const response = await fetch(baseURL + url, option);
        
        if (response.ok !== true) {
            const err = await response.json();
            // throw new Error(err.message);
        }

        if (response.status === 204) {
            return response;
        } else if (response.headers.has('content-type') && response.headers.get('content-type').includes('application/json')) {
            return response.json();
        } else {
            return response.text();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }

}

function createOption(method = 'get', data) {

    const option = {
        method,
        headers: {}
    };
    if (data !== undefined) {
        option.headers['Content-Type'] = 'Application/json';
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