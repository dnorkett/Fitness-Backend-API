const router = require('express').Router();
let Calories = require('../models/calories.model');

router.route('/').get((req, res) => {
    Calories.find()
        .then(calories => res.json(calories))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const activity = req.body.activity;
    const caloriesPerHour = req.body.caloriesPerHour;

    const newCalories = new Calories({
        activity,
        caloriesPerHour
    });

    newCalories.save()
        .then(() => res.json('Calories added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Calories.findById(req.params.id)
        .then(calories => res.json(calories))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Calories.findByIdAndDelete(req.params.id)
        .then(() => res.json('Calories deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Calories.findById(req.params.id)
        .then(calories => {
            calories.activity = req.body.activity;
            calories.caloriesPerHour = req.body.caloriesPerHour;

            calories.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        });
})


module.exports = router;