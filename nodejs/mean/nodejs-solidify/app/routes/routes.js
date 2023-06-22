module.exports = app =>{
    const userController = require('../controllers/userController');

    /***********Read Controller*************/
    app.get('/user', userController.readUser);

    /***********Create Controller*************/
    app.post('/user', userController.createUser);

    /***********Update Controller*************/
    app.put('/user/:id', userController.updateUser);

    /***********Delete Controller*************/
    app.delete('/user/:id', userController.deleteUser);

    /***********login Controller*************/
    app.post('/login', userController.login);

}