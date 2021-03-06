const router = require('express').Router();
const cubeService = require('../services/cubeService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async(req, res) => {
    const cube = req.body;
    //Validate
    if (cube.name.length < 2) {
        res.status(400).send('Invalid request!');
        return;
    }
    //Save data
    try {
        await cubeService.save(cube)
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/details/:id', (req, res) => {
    const cube = cubeService.getOne(req.params.id);
    res.render('details', { cube });
})

module.exports = router;