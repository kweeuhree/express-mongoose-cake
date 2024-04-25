const express = require('express');
const router = express.Router();

const Cake = require('../models/cakeModel');
const cakeController = require('../controllers/cakeController');

router.param('id', async (req, res, next, id) => {
    
    try {

        const cake = await Cake.findById(id);
        if(cake) {
            req.cakeId = id;
            next();
        }

    } catch(error) {
        console.log(error.message);
        res.status(400).send('There is a problem with a fruit id parameter');
    }
});

//get all cakes
router.get('/', cakeController.fetchAllCakes);
//get specific cake
router.get('/:id', cakeController.getCake);
//update a cake
router.put('/:id', cakeController.updateCake);
//create new cake
router.post('/', cakeController.createCake);
//delete cake
router.delete('/:id', cakeController.deleteCake);

module.exports = router;