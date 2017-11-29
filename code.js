let movieData = require("./data").movieData; // Import data.js

function renderMovieReview(movieData){
    let movieImg = document.querySelector("#movieImg > img");
    movieImg.setAttribute("src", movieData.imgUrl);
    movieImg.setAttribute("alt", movieData.title);

    let movieDesc = document.querySelector("#movieDesc");
    movieDesc.querySelector("h1").innerHTML = movieData.title;
    movieDesc.querySelector("p").innerHTML = movieData.description;
    
    let actorsList = document.querySelector("#actorsList");
    for(let i = 0; i < movieData.actors.length; i++){
        let li = document.createElement("li");
        actorsList.appendChild(li).innerHTML = "<li>" + movieData.actors[i] + "</li>";
    }
}
renderMovieReview(movieData); // Render Movie Review

// Star rating functionality
var stars = document.querySelector("#stars");
function resetStarRating() {
    document.querySelector("#star5").classList.remove("filledStar");
    document.querySelector("#star4").classList.remove("filledStar");
    document.querySelector("#star3").classList.remove("filledStar");
    document.querySelector("#star2").classList.remove("filledStar");
    document.querySelector("#star1").classList.remove("filledStar");
}
stars.addEventListener("click", function (event) {
    resetStarRating(); // Reset star to empty
    switch(event.target.id){
        case "star5": document.querySelector("#star5").classList.add("filledStar");
        case "star4": document.querySelector("#star4").classList.add("filledStar");
        case "star3": document.querySelector("#star3").classList.add("filledStar");
        case "star2": document.querySelector("#star2").classList.add("filledStar");
        case "star1": document.querySelector("#star1").classList.add("filledStar");
            return;
    };
});
