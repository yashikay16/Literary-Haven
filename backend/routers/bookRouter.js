const express = require('express');
const router = express.Router();
const Model = require('../models/bookModel')

router.post('/add', (req, res) => {
    console.log(req.body);

    // saving the data to mongoDB
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

// colon denotes a URL parameter.
router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id);
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// if we dont write new : true then it will show previous data
// which is being overriden and then if we do getAll then we can see
// updated data but by doing new : true we can see the updated 
// data their only.
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
// update likes
router.put('/:id/likes', async (req, res) => {
    const bookId = req.params.id;

    try {
        const updatedBook = await Model.findByIdAndUpdate(
            bookId,
            { $inc: { likes: 1 } }, // Increment likes count by 1
            { new: true } // Return the updated book
        );

        res.status(200).json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating likes', error });
    }
});

module.exports = router;