const searchWord = () => {
  const inputText = document.getElementById("input").value;

  if (inputText === "") {
    alert("please enter valid word");
  } else {
    dictionary(inputText);
  }
};
const dictionary = (inputText) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dictionaryWordDetails(data);
    })
    .catch(() => {
      alert("Couldn't Find The Word");
    });
};
const dictionaryWordDetails = (data) => {
  let text = "";
  let synonyms = "None";

  data[0].phonetics.map((t) => {
    if (t.hasOwnProperty("text")) {
      text = t.text;
    }
  });

  if (data[0].meanings[0].synonyms[0]) {
    synonyms = data[0].meanings[0].synonyms[0];
  }

  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("w-75", "border", "border-danger", "m-auto", "mt-5", "p-5");
  div.innerHTML = ` 
        <div class="d-flex flex-wrap">
            <h2 class="flex-grow-1">${data[0].word}</h2>
            <button id="playSound" class="btn fw-bolder  rounded-5 bg-danger text-white"><i
            class="fa-solid fa-volume-low"></i></button>
        </div>
        <div>
            <p>${text}<p/>
        </div>
        <div class="d-flex align-items-center mt-3">
            <p class="fw-semibold lex-grow-1">${data[0].meanings[0].partOfSpeech}</p>
            <p style="height: 1px;" class="border-bottom border border w-100 justify-content-center ms-3"></p>
        </div>

        <div>
            <p class="text-secondary-emphasis">Meaning</p>
            <ul class="px-5">
                <li class="text-opacity-50 text-danger-emphasis">${data[0].meanings[0].definitions[0].definition}</li>
                
            </ul>
            <p >Synonyms:<span class="text-warning"> ${synonyms} </span></p>
            
            <span>source: https://api.dictionaryapi.dev/api/v2/entries/en/</span>${data[0].word}
        </div>
      `;
  mainContainer.appendChild(div);
  // console.log(sound)

  document.getElementById("playSound").addEventListener("click", () => {
    const sound = data[0].phonetics[0].audio;
    if (sound === "") {
      alert("Sound not found");
    } else {
      const audio = new Audio(sound);
      audio.play();
    }
  });
};
