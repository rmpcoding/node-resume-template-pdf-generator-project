var inquirer = require("inquirer");
var api = require("./api");
var generator = require("./generate-html")
var pdf = require("html-pdf");
var options = {format: "Letter"};

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "list",
      message: "What is your favorite color?",
      name: "color",
      choices: ["red", "blue", "green", "pink"]
    },
  ])
  .then(({username, color}) => {
    api.getUser(username).then((data) => {
      // console.log(color, data);
    let html =  generator(color,data)
    pdf.create(html, options).toFile("./gitprofile.pdf", (error, response) => {
      if (error) {
        console.log(error);
        return error
      } else {
        console.log(response);
        return response;
      }
    })

    })
  });




      // .then((html, options) => {
      // pdf
      
      // .create(html).toFile("./gitprofile.pdf", (error, response) => {
      //   if (errror) {
      //     return console.log(error);
      //   } else {
      //     console.log(response);
      //   }
      // })
    // });
  // return back to this once we get the git stars
  // .then((response) => {
  //   console.log(response);
  // })



  // Will I need to add module.export variables to dependencies in JSON object?