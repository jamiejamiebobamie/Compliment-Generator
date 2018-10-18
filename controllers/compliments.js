const express = require('express');
const app = express();
const Compliment = require('../models/compliment');
var admin = require('../app')


    // NEW compliment form
    app.get('/compliments/new', (req, res) => {
      res.render('compliments-new', {});
  });

    // CREATE NEW compliment
    app.post('/compliments', (req, res) => {
      Compliment.create(req.body).then((compliment) => {
        console.log(compliment);
        res.redirect(`/`)

      }).catch((err) => {
        console.log(err.message);
      })
  });







// ---------- ADMIN FEATURES BELOW ------------


  // SHOW A single compliment for ADMIN USE ONLY
  app.get('/compliments/:id', (req, res) => {
    // find compliment
    Compliment.findById(req.params.id).then(compliment => {
        res.render('compliments-show-admin', { compliment: compliment})})
        .catch((err) => {
      console.log(err.message)
    });
});

      //admin see all to edit
      app.get('/index', (req, res) => {
          Compliment.find()
             .then(compliments => {
               res.render('compliments-index', { compliments: compliments });
             })
             .catch(err => {
               console.log(err);
             })
      });

    // EDIT a compliment by clicking on the edit link in the shown compliment
    app.get('/compliments/:id/edit', (req, res) => {
      Compliment.findById(req.params.id, function(err, compliment) {
        res.render('compliments-edit', {compliment: compliment});
      })
  });


    // UPDATE... does this replace EDIT? ...guess not...
    app.put('/compliments/:id', (req, res) => {
      Compliment.findByIdAndUpdate(req.params.id, req.body).then(compliment => {
          res.redirect('/index');
        })
        .catch(err => {
          console.log(err.message)
        })
    });


    // DELETE one compliment from the delete button on the "shown" compliment page
    app.delete('/compliments/:id', function (req, res) {
      console.log("DELETE compliment")
      Compliment.findByIdAndRemove(req.params.id).then((compliment) => {
         res.redirect('/index');
      }).catch((err) => {
        console.log(err.message);
      })
  });

module.exports = app;
