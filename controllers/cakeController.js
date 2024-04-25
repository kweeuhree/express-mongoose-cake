const Cake = require('../models/cakeModel.js');

//get all cakes
const fetchAllCakes = async (req, res) => {
    const cakes = await Cake.find();
    res.status(200).json({ cakes: cakes });
};
//get specific cake
const getCake = async (req, res) => {
    const cake = await Cake.findById(req.fruitId);
    res.status(200).json({ cake: cake });
};

//update a cake
const updateCake = async (req, res) => {
    const { name, recipe, countryOfOrigin } = req.body;
    const cake = await Cake.findByIdAndUpdate(req.cakeId, {
        name: name,
        recipe: recipe,
        countryOfOrigin: countryOfOrigin
    }, { new: true }); //store the updated value

    res.status(200).json({ updatedCake: cake });
};

//create new cake
const createCake = async (req, res) => {
    const { name, recipe, countryOfOrigin } = req.body;
    const newCake = await Cake.create({
        name: name,
        recipe: recipe,
        countryOfOrigin: countryOfOrigin
    });
    res.status(201).json({ newCake: newCake });
};

//delete cake
const deleteCake = async (req, res) => {
    await Cake.findByIdAndDelete(req.bandId);
    res.status(204).send();
};


module.exports = {
    fetchAllCakes, getCake, updateCake, createCake, deleteCake
};