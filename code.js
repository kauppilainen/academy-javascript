

function renderMovieReview(movieData){
    let mainDiv = document.querySelector("main");

    // Create Movie review HTML Sceleton
    mainDiv.innerHTML = "<div id=\"movieReviewContainer\">" +
                            "<div id=\"movieReview\"></div>" +
                        "</div>";

    let movieReview = document.querySelector("#movieReview");
    movieReview.innerHTML = "<div id=\"movieImg\">" +
                                "<img src=\"" + movieData.imgUrl + "\" alt=\"" + movieData.title + "\"/>" +
                            "</div>" +
                            "<div id=\"movieDesc\">" +
                                "<h1>" + movieData.title + "</h1>" +
                                "<div id=\"stars\">" +
                                    "<span id=\"star1\">&#9733;</span>" +
                                    "<span id=\"star2\">&#9733;</span>" +
                                    "<span id=\"star3\">&#9733;</span>" +
                                    "<span id=\"star4\">&#9733;</span>" +
                                    "<span id=\"star5\">&#9733;</span>" +
                                "</div>" +
                                "<p>" + movieData.description +"</p>" +
                                "<ul id=\"actorsList\">" +
                            
                                "</ul>" +
                            "</div>";
    
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
