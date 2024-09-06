// const box = document.querySelector(".box");
// const btn = document.querySelector(".number");

// const render = () => {
//   const data = JSON.parse(localStorage.getItem('numbers'));
//   box.innerHTML = data?.map((item)=> `<h1>${item}</h1>`).join("") || "";
// };

// btn.addEventListener("click", () => {
//   const randomNumber = Math.random(Math.random() * 1000);

//   const oldNumbers = JSON.parse(localStorage.getItem('numbers')) || [];
  
//   const result = JSON.stringify([randomNumber, ...oldNumbers]);

//   localStorage.setItem('numbers', result);

//   render();

// })

// render();


/////////

const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const box = document.querySelector(".box");

const render = () => {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  box.innerHTML = data.map(
    (item) => `<div>
    <h1>${item.user_name}</h1>
    <h1>${item.user_adress}</h1>
    <button onclick="deleteItem(${item.id})">delete</button>
  </div>`
  );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = { id: Date.now() };
  for (let i of inputs) {
    obj[i.name] = i.value;
    i.value = "";
  }

  const oldData = JSON.parse(localStorage.getItem("data")) || [];
  localStorage.setItem("data", JSON.stringify([obj, ...oldData]));

  render();
});

render();

const deleteItem = (id) => {
  const data = JSON.parse(localStorage.getItem("data"));

  const result = data.filter((item) => item.id !== id);
   
};
