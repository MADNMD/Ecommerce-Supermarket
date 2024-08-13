const router = require('express').Router();

const emailSenderService = require('../services/emailSenderService');

router.post('/send', async (req, res) => {

    const text = req.body;

    try {

        const result = await emailSenderService.sendMail(text);
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send('Грешка при изпращане на имейл');
    }
});

router.post('/send-form', async (req, res) => {

    const form = req.body;
    
    try {

        const result = await emailSenderService.sendMailForm( form );
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send('Грешка при изпращане на поръчката');
    }
});

module.exports = router;