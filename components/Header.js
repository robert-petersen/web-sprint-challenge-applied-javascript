// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// select header container to append the created header to
const headerContainer = document.querySelector(".header-container");

function Header() {
    // header content container
    let theHeader = document.createElement("div");
    theHeader.classList.add("header");
    // date
    let theDate = document.createElement("span");
    theDate.classList.add("date");
    theDate.textContent = "March 28, 2020";
    theHeader.appendChild(theDate);
    //h1
    let title = document.createElement("h1");
    title.textContent = "Lambda Times";
    theHeader.appendChild(title);
    // temp
    let temp = document.createElement("span");
    temp.classList.add("temp");
    temp.textContent = "98°";
    theHeader.appendChild(temp);
    return theHeader;
}

// create header and append it
headerContainer.appendChild(Header());
