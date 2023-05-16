module.exports = app => {
    const brothersController = require('../controllers/brotherController');
    
        // read data
        app.get('/brothers', brothersController.readData);

        // create data
        app.post('/brothers', brothersController.createData);
    
        // update data
        app.put('/brothers/:id', brothersController.updateData);
    
        // delete data
        app.delete('/brothers/:id', brothersController.deleteData);
};

