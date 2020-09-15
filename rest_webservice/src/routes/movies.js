const {Router} = require('express');
const router = Router();
const _ = require('underscore');
const demo = require('../demo.json');

router.get('/', (req, res) => {
    console.log(demo);
    res.json(demo);
});

router.post('/', (req, res) => {
    const {title, director, año, rating} = req.body;
    if (title && director && año && rating) {
        let id = demo.length + 1;
        const New_peli = {id, ...req.body};
        demo.push(New_peli);
        res.json(demo);
    }else{
        res.json({"error": "no se agreagron peliculas"});
    }

});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(demo, (movie, i) => {
        if(movie.id == id ){
            demo.splice(i, 1);
        }
        res.json(demo);
    });
    
});
module.exports = router;