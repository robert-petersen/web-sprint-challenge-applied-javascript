// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from "axios";

let topicContainer = document.querySelector("div.topics");

axios
    .get("https://lambda-times-api.herokuapp.com/topics")
    .then((res)=>{
        let response = res.data.topics;
        // console.log(response);
        response.forEach((topic)=>{
            let newTopic = createTab(topic);
            topicContainer.appendChild(newTopic);
        })

    })
    .catch((err)=>{
        console.log("Error", err);
    });


function createTab(topic){
    let aTab = document.createElement("div");
    aTab.textContent = topic;
    aTab.classList.add("tab");
    return aTab;
}


    // response.forEach((topic)=>{
    //     let aTopic = document.createElement("div");
    //     aTopic.textContent = topic;
    //     aTopic.classList.add("tab");
    //     topicContainer.append(aTopic);
    // });