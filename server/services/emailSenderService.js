const nodemailer = require('nodemailer');

exports.sendMail = async (text) => {

    try {

        const transporter = nodemailer.createTransport({
            host: 'smtp.abv.bg',
            // host: 'smtp.mail.bg',
            port: 587,
            // port: 465,
            secure: false,
            // secure: true,
            auth: {
                user: 'vanimi-supermarket@abv.bg',
                // pass: 'misho1234'
                pass: 'misho123'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: 'vanimi-supermarket@abv.bg',
            // from: 'vanimi-supermarket@abv.bg',
            to: [`${text.text}`, 'vanimi-supermarket@abv.bg'],
            subject: `Честито Вие се абонирахте за бюлетина на супермаркет VANIMI`,
            text: `Ще получавате нашите най-нови промоции на посочения от Вас имейл ${text.text}`
        }

        const info = await transporter.sendMail(mailOptions);
        console.log('Имейлът е изпратен: ' + info.response);
        return 'Имейлът е изпратен успешно';

    } catch (error) {
        console.error('Грешка при изпращане на имейл:', error);
        throw error;
    }

}

exports.sendMailForm = async (form) => {

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.abv.bg',
            // host: 'smtp.mail.bg',
            port: 587,
            // port: 465,
            secure: false,
            // secure: true,
            auth: {
                user: 'vanimi-supermarket@abv.bg',
                // pass: 'misho1234'
                pass: 'misho123'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // const generateDynamicField = (label, value) => {
        //     return value ? `<p>${label}</p><p>${value}</p>` : '';
        // };

        const generateDynamicSpanField = (label, value) => {
            return value ? `<p>${label}: <span>${value}</span></p>` : '';
        };

        const formOption = {
            from: 'vanimi-supermarket@abv.bg',
            // from: 'vanimi-supermarket@mail.bg',
            to: [`${form.email}`, 'vanimi-supermarket@abv.bg'],
            subject: `Поръчката е приета #${form.orderNumber}`,
            html: `
               <html>
                    <head>
                        <style>

                            body {
                                margin: 0 auto;
                                font-family: Arial, sans-serif;
                            }

                            h1, h2 {
                                color: red;
                                // color: #333;
                            }

                             p {
                                color: #555;
                            }

                            span {
                                font-weight: bold;
                            }

                            .container {
                                display: flex;
                                padding: 1em;
                            }   

                            .user-info,
                            .order-info {
                                display: flex;
                                flex-direction: column;
                            }

                        </style>
                    </head>
                    <body>
                    <h1>Благодарим ти, твоята поръчка е  <a href="">приета!</a></h1>
                        <div class="container">
                            <div class="user-info">
                                <h2>Информация за доставка</h2>
                                <p>Име:</p>
                                <p>${form.firstName} ${form.lastName}</p>
                                <p>Телефон за контакти:</p>
                                <p>${form.telefon}</p>
                                <p>Адрес за доставка:</p>
                                <p>${form.deliveryDetails.country},${form.deliveryDetails.city}</p>
                                <p>${form.deliveryDetails.hood}, ${form.deliveryDetails.address}</p>
                                <p>За доставка на:</p>
                                <p>Дата: <span>${form.deliveryDetails.day}</span></p>
                                <p>Час: <span>${form.deliveryDetails.hour}</span></p>
                            </div>
                            <div class="order-info">
                                 <h2>Данни за поръчката</h2>
                                 <p>Номер на поръчката: <span>${form.orderNumber}</span></p>
                                 <p>Дата на поръчката: <span>${form.currentDate}</span></p>
                                 <p>Начин на плащане: <span>${form.deliveryDetails.paymentMethod}</span></p></p>
                                  ${generateDynamicSpanField('Допълнителна информация', form.deliveryDetails.additionalComment)}
                            </div>
                            </div>
                        <div class="footer">
                            <img src="https://i.postimg.cc/TY6HvKyp/logo.png" alt="Logo" width="70" height="auto">
                        </div>
                    </body>
                </html>
            `
        }

        const info = await transporter.sendMail(formOption);
        console.log('Имейлът е изпратен: ' + info.response);
        return 'Поръчката е изпратен успешно';

    } catch (error) {
        console.error('Грешка при изпращане на поръчката:', error);
        throw error;
    }
}