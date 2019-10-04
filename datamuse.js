//words-list.js
let colors = ["red", "green", "orange", "yellow", "magenta", "cyan", "lime", "blue"];
let containerElt = document.querySelector("#container");
let result;
//
let mlRenownElt = document.querySelector("#mlRenown");
mlRenownElt.addEventListener("click", e => {
  let userWord = "renown";
  getWord(userWord);
});

let rhyRenownElt = document.querySelector("#rhyRenown");
rhyRenownElt.addEventListener("click", e => {
  let userWord = "renown";
  getRhyme(userWord);
});

//
let mlReviseElt = document.querySelector("#mlRevise");
mlReviseElt.addEventListener("click", e => {
  let userWord = "revise";
  getWord(userWord);
});

let rhyReviseElt = document.querySelector("#rhyRevise");
rhyReviseElt.addEventListener("click", e => {
  let userWord = "revise";
  getRhyme(userWord);
});

//
let mlAbrasiveElt = document.querySelector("#mlAbrasive");
mlAbrasiveElt.addEventListener("click", e => {
  let userWord = "abrasive";
  getWord(userWord);
});

let rhyAbrasiveElt = document.querySelector("#rhyAbrasive");
rhyAbrasiveElt.addEventListener("click", e => {
  let userWord = "abrasive";
  getRhyme(userWord);
});

//
let mlAssessElt = document.querySelector("#mlAssess");
mlAssessElt.addEventListener("click", e => {
  let userWord = "assess";
  getWord(userWord);
});

let rhyAssessElt = document.querySelector("#rhyAssess");
rhyAssessElt.addEventListener("click", e => {
  let userWord = "assess";
  getRhyme(userWord);
});

//
let mlInvestigateElt = document.querySelector("#mlInvestigate");
mlInvestigateElt.addEventListener("click", e => {
  let userWord = "investigate";
  getWord(userWord);
});

let rhyInvestigateElt = document.querySelector("#rhyInvestigate");
rhyInvestigateElt.addEventListener("click", e => {
  let userWord = "investigate";
  getRhyme(userWord);
});

//
let mlConElt = document.querySelector("#mlCon");
mlConElt.addEventListener("click", e => {
  let userWord = "Contrast";
  getWord(userWord);
});

let rhyConElt = document.querySelector("#rhyCon");
rhyConElt.addEventListener("click", e => {
  let userWord = "contrast";
  getRhyme(userWord);
});

//ASYNC FUNCTIONS
async function getWord(word) {
  result = await fetch(`https://api.datamuse.com/words?ml=${word}&max=15`, {mode: 'cors'})
          .then(res => res.json()
            .then((result) => {
                    updateScreen(result);
                }
            )
          );
}

async function getRhyme(word) {
  result = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}&max=10`, {mode: 'cors'})
          .then(res => res.json()
            .then((result) => {
                    updateScreen(result);
                }
            )
          );
}


//Updates the screen
const updateScreen = (result) => {
  containerElt.innerHTML = "";
  for(r of result) {
    let newDiv = document.createElement("div");
    newDiv.style.background = colors[Math.floor(Math.random()*colors.length)];
    newDiv.innerHTML = r.word;
    containerElt.appendChild(newDiv);
  }
};