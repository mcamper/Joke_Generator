
let heading = document.querySelector("h1");
heading.innerHTML = "Welcome to Auntie ReRe's Riddles";

new Typewriter("h1", {
    strings: "Welcome to Auntie ReRe's Riddles",
    autoStart: true,
    cursor: " ",
  });

  

  let joke_generator_button = document.querySelector('#joke_generator_button');
  joke_generator_button.addEventListener('click', generateJokes);

  let revealAnswerButton = document.querySelector('#reveal_answer');
  revealAnswerButton.addEventListener('click', showAnswer);
  
  function generateJokes(){
    apiUrl = "https://official-joke-api.appspot.com/random_joke";
    axios.get(apiUrl).then(showJoke);
   
  }

function showJoke(response) {
    console.log(response.data);
    let riddleText = response.data.setup;
    let answerText = response.data.punchline;

    let riddleElement = document.querySelector("#riddle");
    let answerElement = document.querySelector("#answer");

    riddleElement.innerHTML = riddleText;
    answerElement.innerHTML = answerText;
    answerElement.style.display = "none";

    revealAnswerButton.style.display = "inline-block";

    new Typewriter("riddle", {
        strings: "response.data.setup",
        autoStart: true,
        cursor: " ",
      });

}

function showAnswer() {
    document.querySelector("#answer").style.display = "block";
    revealAnswerButton.style.display = "none";
}




