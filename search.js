function search()  {
    const searchbox = document.getElementById("find").value.toUpperCase();
    // const storeMovies = document.getElementById("movies-container")
    const movies = document.querySelectorAll(".box");
    const mname = storeMovies.getElementsByTagName("h3");
    
    for(var i=0; i < mname.length; i++){
        let match = box[i].getElementsByTagName("h3")[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML || match.innerText;
           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                movies[i].style.display = "";

           }else{
            movies[i].style.display = "none";
           }
        }
    }
}

