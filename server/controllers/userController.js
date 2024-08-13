const router = require('express').Router();

const userService = require('../services/userService');

const { COOKIE_SESION_NAME } = require('../config/env');

router.post('/register', async (req, res) => {

    try {

        const { email, password } = req.body;
        const user = await userService.register(email, password);
        const token = await userService.createToken(user);
        res.json({
            authToken: token,
            email: user.email,
            password: user.password,
            _id: user._id,
            admin: user.admin
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('register-error-server');
    }

});

router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;
        const user = await userService.login(email, password);
        const token = await userService.createToken(user);
        res.json({
            authToken: token,
            email: user.email,
            password: user.password,
            _id: user._id,
            admin: user.admin
        })


    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('login-error-server');
    }
});

router.get('/logout', (req, res) => {
    res.json({});
    res.status(200);
});

router.get('/get-user/:userId', async (req, res) => {

    try {

        const userId = req.params.userId;
        const profile = await userService.getUser(userId);

        res.json(profile);

    } catch (error) {
        res.status(500).json({ error: 'Грешка от сървъра userController' })
    }
});

router.put('/edit/:userId', async (req, res) => {

    try {

        const userId = req.params.userId;
        const userData = req.body;

        const editUser = await userService.editUser(userId, userData);

        res.status(200).json(editUser);
    } catch (error) {
        res.status(400).json({ error: 'Грешка от сървъра userController' });
    }
});

router.get('/get-all-users', async (req, res) => {

    try {

        const allUsers = await userService.getAllUsers();
        res.json(allUsers)

    } catch (error) {
        res.status(500).json({ error: 'Грешка от сървърва userController' });
    }

});

router.get('/search-user', async (req, res) => {

    try {
        const query = req.query.q;

        if (!query) {
            return res.status(400).send('Query is required');
        }

        const products = await userService.searchUsers(query);
        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('search-user-error-server', error.message);
    }
});

module.exports = router;