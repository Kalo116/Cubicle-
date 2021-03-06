const router = require('express').Router();
const cubeServices = require('../services/cubeService');

router.get('/', (req, res) => {
    let { search, from, to } = req.query;
    const cubes = cubeServices.getAll(search, from, to);
    res.render('index', { cubes, search, from, to });
});
router.get('/about', (req, res) => {
    res.render('about');
});
module.exports = router;



// exports.create = (req, res) => {
//     res.render('create');
// }