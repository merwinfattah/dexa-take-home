const express = require('express');
const router = express.Router();
const db_connection = require('../database/database');


//Route untuk Display Task
router.get('/', function(req, res, next){
    try {
        db_connection.query('SELECT * FROM task ORDER BY id ASC', function (err, rows) {
            if (err) {
                res.render('pages', {data: ''});
            } else {
                res.render('pages/index', {data: rows});
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message});
    }

});

//Route untuk Add Task
router.post('/store', function (req, res, next) {
    try {
        let title = req.body.title;
        let description = req.body.description;
        let status = req.body.status;

        if (title.length === 0 || description.length === 0 || status.length === 0) {
            res.locals.errorMessage = "Please fill in all fields.";
            return res.redirect('/');
        }

        let formData = {
            title: title,
            description: description,
            status: status
        }
        
        // insert query
        db_connection.query('INSERT INTO task SET ?', formData, function(err, result) {
            //if(err) throw err
            if (err) {
                res.locals.errorMessage = err.message;
                res.redirect('/');
            } else {                
                res.locals.successMessage = 'Data Berhasil Disimpan!';
                res.redirect('/');
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
    

});

//Route untuk Display Halaman Edit Status Task
router.get('/edit/(:id)', function(req,res,next) {
    try {
        const id = req.params.id;
        db_connection.query('SELECT * FROM task WHERE id='+id ,function (err, rows) {
            if (err) {
                res.render('pages', {data: ''});
            } else {
                res.render('pages/update', {data: rows});
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
})

//Route untuk Update Status Task pada DB
router.post('/update/:id', function(req,res,next) {
    try {
        const id = req.params.id;
        const formData = {
            status: req.body.status,
          };
          
          // Update query
        db_connection.query('UPDATE task SET ? WHERE id = ' + id, formData, function(err, result) {
            if (err) {
              // Handle error
              res.locals.errorMessage = err.message;
              res.redirect('/');
            } else {
              res.locals.successMessage = 'Data Berhasil Diupdate!';
              res.redirect('/');
            }
          });

    } catch(err) {
        res.status(500).json({ message: err.message});
    }
})

//Route untuk Hapus Task
router.get('/delete/:id', function(req, res, next) {
    try {
        let id = req.params.id;
        db_connection.query('DELETE FROM task WHERE id = ' + id, function(err, result) {
            if (err) {
                res.locals.errorMessage = err.message;
                res.redirect('/');
            } else {
                res.locals.successMessage = 'Data Berhasil Dihapus!';
                res.redirect('/');
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
   

});


module.exports = router;