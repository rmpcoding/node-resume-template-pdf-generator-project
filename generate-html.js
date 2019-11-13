const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

const generator = (color, response) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap"
        rel="stylesheet"
      />
      <title>Git Resume</title>
  
      <body>
        <img class="rounded photo-header" src=${response.data.avatar_url} alt="" class="photo">
  
        <h1 class="display-2">
          <span class="git-name">${response.data.name}</span>
        </h1>
          <p class="lead git-bio-p"><span class="git-bio">${response.data.bio}</span></p>
          <p class="text-center flex-column">${response.data.location}, ${response.data.html_url}, ${response.data.blog}</p>


  
        <main>
          <div class="public-repositories">
            <p>Public Repositories:</p>
          </div>
  
          <div class="followers">
            <p>Followers:</p>
          </div>
  
          <div class="github-stars">
            <p>Stars:</p>
          </div>
  
          <div class="following">
            <p>Following:</p>
          </div>
        </main>
  
  
          
          
          <style>

            main {   
              display: grid;
              grid-template: 50% 50% / 50% 50%;
              background-color: yellow;
              border 1px solid green
            }   
  
            body {
              display: grid;
              height: 100%;
              width: auto;
              border: 1px solid white;
              background-color: white;
              -webkit-print-color-adjust: exact !important;
              font-family: 'Cabin', sans-serif;         
            }

            .photo-header {
              display: flex;
              background-color: blue;
              padding: 10px;
              margin: 5% auto 5% auto;
              width: 250px;
              height: 250px;
              border-radius: 50%;
              object-fit: cover;
              border: 6px solid yellow;
              box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
            }  

            @media print { 
              body { 
                zoom: .5; 
                } 
              }
  
              p, .git-bio {
                text-align: center;
              }
  
              .display-2 {
                margin: auto;
              }
  
              .git-name {
                font-size: 200%;
              }

              .public-repositories {
                border: 3px green solid;
                padding: 10px;
                margin: 1% 1% 1% 1%;
              }
  
              .followers {
                border: 3px green solid;
                padding: 10px;
                margin: 1% 1% 1% 1%;
              }
  
              .following {
                border: 3px green solid;
                padding: 10px;
                margin: 1% 1% 1% 1%;
              }
  
              .github-stars {
                border: 3px green solid;
                padding: 10px;
                margin: 1% 1% 1% 1%;
              }
      
            </style>
      </body>
    </html>
  `;
};

module.exports = generator;

//
{
  /* <p>${response.data.url}</p>
<p>${response.data.avatar_url}</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p>${response.data.public_repos}</p>
<p>${response.data.followers}</p>
<p>${response.data.starred_url}</p>
<p>${response.data.following}</p> */
}
//
