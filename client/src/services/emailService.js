import * as requester from '../services/requester';

export const emailSender = async (text) => {

    try {
        const sendEmail = await requester.post('/email/send', { text });

        return sendEmail;
    } catch (error) {
        console.log('email-error-client');
        throw error;
    }
};

export const emailSenderForm = async (form) => {
    
    try {
        const sendEmailForm = await requester.post('/email/send-form',  form );

        return sendEmailForm;
    } catch (error) {
        console.log('email-error-client');
        throw error;
    }
}