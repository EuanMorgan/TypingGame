window.addEventListener("load", init);

//Globals

//Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

//Words Array
//TODO: Change to API to generate random words
const words = [
  "pens",
  "gentleman",
  "computer",
  "vinyl",
  "toothbrush",
  "candle",
  "umbrella",
  "brush",
  "guitar",
  "instrument",
  "speakers",
  "richtofen",
  "dempsey",
  "bicycle",
  "milo",
  "trees",
  "driving",
  "betwixt",
  "twaddle",
  "llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch",
  "antidisestablishmentarianism",
  "cardiff",
  "honk",
  "zenyatta",
  "roadhog",
  "overwatch",
  "zetsubo",
  "alcatraz",
  "jazz",
  "tremendously",
  "pianist",
  "jockey",
  "revolver"
];

//Initialise Game
function init() {
  seconds.innerHTML = currentLevel;

  loadWord(words);

  wordInput.addEventListener("input", startMatch);

  setInterval(countdown, 1000);

  setInterval(checkStatus, 50);
}

function loadWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);

  currentWord.innerHTML = words[randIndex];
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    loadWord(words);
    wordInput.value = "";
    score++;
  }
  score === -1
    ? (scoreDisplay.innerHTML = 0)
    : (scoreDisplay.innerHTML = score);
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    score = -1;
  }
}
