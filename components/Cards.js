// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from "axios";

let theCardContainer = document.querySelector(".cards-container");

axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res)=>{
        let responseBootstrap = res.data.articles.bootstrap;
        responseBootstrap.forEach((article)=>{
            let newArticle = makeArticle(article);
            theCardContainer.appendChild(newArticle);
        });
        let responseJavascript = res.data.articles.javascript;
        responseJavascript.forEach((article)=>{
            let newArticle = makeArticle(article);
            theCardContainer.appendChild(newArticle);
        });
        let responseJquery = res.data.articles.jquery;
        responseJquery.forEach((article)=>{
            let newArticle = makeArticle(article);
            theCardContainer.appendChild(newArticle);
        });
        let responseNode = res.data.articles.node;
        responseNode.forEach((article)=>{
            let newArticle = makeArticle(article);
            theCardContainer.appendChild(newArticle);
        });
        let responseTech = res.data.articles.technology;
        responseTech.forEach((article)=>{
            let newArticle = makeArticle(article);
            theCardContainer.appendChild(newArticle);
        });
    })
    .catch((err)=>{
        console.log("Error", err)
    });

let cardIDNumber = 1;

function makeArticle({authorName, authorPhoto, headline}){
    // card container
    let aCard = document.createElement("div");
    aCard.classList.add("card");
    aCard.id = cardIDNumber;
    // headline
    let aHeadline = document.createElement("div");
    aHeadline.classList.add("headline");
    aHeadline.textContent = headline;
    aCard.appendChild(aHeadline);
    // author container
    let aAuthorContainer = document.createElement("div");
    aAuthorContainer.classList.add("author");
    aCard.appendChild(aAuthorContainer);
    // author img container
    let authorImgContainer = document.createElement("div");
    authorImgContainer.classList.add("img-container");
    aAuthorContainer.appendChild(authorImgContainer);
    // author img
    let authorImg = document.createElement("img");
    authorImg.src = authorPhoto;
    authorImgContainer.appendChild(authorImg);
    // author name
    let aAuthorName = document.createElement("span");
    aAuthorName.textContent = authorName;
    aAuthorContainer.appendChild(aAuthorName);
    // event listener
    aCard.addEventListener("click", (event)=>{
        console.log(headline);
    });
    // return the card container
    return aCard;
}