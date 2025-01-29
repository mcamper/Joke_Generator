

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




