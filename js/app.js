const title = document.querySelector("#title");
const body = document.querySelector("#body");
const btn = document.querySelector("#btn");

// to Load an advice when the page load
document.addEventListener("DOMContentLoaded", showData);

// Event listener on the button
btn.addEventListener("click", showData);

async function fetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip;
}

function fillData(data) {
  title.textContent = `ADVICE #${data.id}`;
  body.textContent = `“${data.advice}”`;
}

function showData() {
  fetchData()
    .then((data) => {
      fillData(data);
    })
    .catch((err) => console.log(err));
}
