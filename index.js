// required pkgs
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [    
    {
    type: 'input',
    message: 'Name:',
    name: 'name',
    },
    {
    type: 'input',
    message: 'Where are you located?',
    name: 'location',
    },
    {
    type: 'input',
    message: 'Please include a bio about yourself',
    name: 'bio',
    },
    {
    type: 'input',
    message: 'What is your LinkedIn profile?',
    name: 'linkedin',
    },
    {
    type: 'input',
    message: 'What is your Github profile?',
    name: 'github',
    }
];

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile('index.html', "", (err) =>
    err ? console.error(err) : console.log('HTML created!')
  );
}
// TODO: Create a function to initialize app
function init(data) {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile(response)
        generateHTML(response)
    })
   } 

   function generateHTML(response) {
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel='stylesheet' href="./assets/css/reset.css"/>
        <link rel='stylesheet' href="./assets/css/style.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></head>
    <body>
    
        <div class="card" style="margin: auto, ; width: 100%;">
            <img src="./assets/images/banner.webp" class="card-img-top" alt="banner">
            <div class="card-body">
              <h5 class="card-title name">${response.name}.</h5>
              <p class="card-text bio">${response.bio}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item location">${response.location}</li>
            </ul>
            <div class="card-body">
              <a href="https://${response.linkedin}" class="card-link linkedin">LinkedIn</a>
              <a href="https://github.com/${response.github}" class="card-link">Github</a>
            </div>
          </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>`

    fs.writeFile('index.html', html, (err) =>
    err ? console.error(err) : console.log('Success!'))
   }

   init()