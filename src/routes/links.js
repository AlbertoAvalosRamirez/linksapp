//ruta para almaecnear los links
const express  = require('express');
const router = express.Router();
const pool = require('../database')//DB CONNECTION

router.get('/add',(req,res)=> {
    res.render('/home/albert/Desktop/linksapp/src/views/layouts/links/add.hbs');
});
router.post('/add',async (req,res)=>{
    const{title,url,description} = req.body;
    const newLink = {
        title,
        url,
        description
    };
    await pool.query('INSERT INTO links set ?',[newLink]);// when this process ends then continue
    res.redirect('/links');
});
router.get('/', async(req,res)=>{
    const links = await  pool.query('SELECT * FROM links'); //select links and save them on link constant
    console.log(links);
    res.render('/home/albert/Desktop/linksapp/src/views/layouts/links/lists.hbs',{links});

});
//delete site
router.get('/delete/:id', async (req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM links WHERE id = ?', [id]);
    res.redirect('/links');
});
router.get('/edit/:id', async(req,res)=>{
    const{id} = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id = ? ',[id]);
    res.render('/home/albert/Desktop/linksapp/src/views/layouts/links/edit.hbs', {links : links[0]});
});
router.post('/edit/:id' , async(req,res)=>{
    const {id}  = req.params;
    const{title,url,description}   = req.body;
    const newLink = {
        title,
        description,
        url
    };
    await pool.query('UPDATE links SET ? WHERE id  = ?',[newLink,id]);
    res.redirect('/links');

});
module.exports = router;