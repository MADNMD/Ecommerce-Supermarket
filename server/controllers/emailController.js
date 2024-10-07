const router = require('express').Router();

const emailSenderService = require('../services/emailSenderService');

router.post('/send', async (req, res) => {

    const text = req.body;

    try {

        const result = await emailSenderService.sendMail(text);
        res.status(200).json({ message: 'Имейлът е изпратен успешно', result }); 

    } catch (error) {
        res.status(500).json({ error: 'Грешка при изпращане на имейл', details: error.message });
    }
});

router.post('/send-form', async (req, res) => {

    const form = req.body;
    console.log(form)
    
    try {

        const result = await emailSenderService.sendMailForm( form );
        console.log(result)
        res.status(200).json({ message: 'Формата е изпратена успешно', result });

    } catch (error) {
        res.status(500).json({ error: 'Грешка при изпращане на поръчката', details: error.message });
        // res.status(500).send('Грешка при изпращане на поръчката');
    }
});

module.exports = router;