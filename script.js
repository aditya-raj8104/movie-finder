document.getElementById("btn").addEventListener("click",searchmovies);

async function searchmovies() {
    let moviename = document.getElementById("searchBox").value;
   let container = document.getElementById("movieContainer");

   try {

         if(moviename===""){
            container.innerHTML=`<p> please enter a movie name</p>`
            return;
         }
       
       let url = await fetch(`https://www.omdbapi.com/?t=${moviename}&apikey=51360459`);
       let data = await url.json();
       
       if(data.Response === "False"){
           container.innerHTML=`
           <p> error occured </p>
           `;
           return;
               }

   container.innerHTML=`
   <img src="${data.Poster}" alt = "movie poster" />
   <h2>${data.Title} (${data.Year})</h2>
   <p> <strong> released on </strong> ${data.Released} </p>
    <p> <strong> duration </strong> ${data.Runtime} </p>
    <p> ${data.Plot} </p>
   
   `  ;

    
   } catch (error) {
    container.innerHTML= `<p> error occurred  </p>`;
   }   
}