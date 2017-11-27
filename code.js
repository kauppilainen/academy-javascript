function renderMovieReview(movieData){
    let mainDiv = document.querySelector("main");

    // Create Movie review HTML Sceleton
    mainDiv.innerHTML = "<div id=\"movieReviewContainer\">" +
                            "<div id=\"movieReview\">" +

                            "</div>" +
                        "</div>";

    let movieReview = document.querySelector("#movieReview");
    movieReview.innerHTML = "<div id=\"movieImg\">" +
                                "<img src=\"" + movieData.imgUrl + "\" alt=\"" + movieData.title + "\"/>" +
                            "</div>" +
                            "<div id=\"movieDesc\">" +
                            "<h1>" + movieData.title + "</h1>" +
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
renderMovieReview(movieData);