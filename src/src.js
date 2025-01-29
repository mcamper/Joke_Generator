

let joke_generator_button = document.querySelector('#joke_generator_button');
joke_generator_button.addEventListener('click', generateJokes);

function generateJokes(){
    alert("Hello");
 
}

let heading = document.querySelector("h1");
heading.innerHTML = "Welcome to Auntie ReRe's Riddles";

new Typewriter("h1", {
    strings: "Welcome to Auntie ReRe's Riddles",
    autoStart: true,
    cursor: " ",
  });



apiKey = "77ao6ba83c370f60fbc94613061ab8t5";
apiUrl = "https://official-joke-api.appspot.com/random_joke";

axios.get(apiUrl).then(showJoke);
console.log(apiUrl);

function showJoke(response) {
    console.log(response.data.setup);
    console.log(response.data.punchline);

    
}
