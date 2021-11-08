const express = require('express');
const router = express.Router();
// const {create, getById} = require("../services/project")
const project = require('../services/project');
const user = require("../services/user")

router.get('/projects/submit', (req, res) => {    
const error = req.flash("error");    

  res.render("CreateProject", { err: error, user: req.session.user});
  !req.session.user && res.redirect("/login");
});

router.post('/projects/submit', (req, res) => {
    let projectInfo = {
      name :  req.body.name,
      abstract : req.body.abstract,
      tags : req.body.tags.split(","),
      authors : req.body.authors.split(","),
      createdBy : req.session.user.id
    }

    const idcheck = project.create(projectInfo);

    if (idcheck[0] === true){
      console.log(idcheck)
    res.redirect("/");
  }
  else{
    req.flash("error", idcheck[1]);
    res.redirect(303, '/projects/submit');
  } 
  
});



router.get('/project/:id', (req, res) => {
  // add code to render the CreateProject Component
  const params = req.params.id;
  const userParams = project.getById(params);
  res.render('Project', { props1: userParams, props2: user.getById(userParams.createdBy), user: req.session.user });
});


module.exports = router;