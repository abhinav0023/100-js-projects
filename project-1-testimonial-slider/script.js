let data = [
  {
    id: 1,
    review: "Abhinav's review",
    name: "Abhinav",
  },
  {
    id: 2,
    review: "Hardik's review",
    name: "Hardik",
  },
  {
    id: 3,
    review: "Ram's review",
    name: "Ram",
  },
];

let p = document.querySelector(".review");
let name = document.querySelector(".name");

p.innerHTML = data[2].review;
name.innerHTML = data[2].name;
function update () {

    let selectedIndex = Math.floor(Math.random() * data.length);
    p.innerHTML = data[selectedIndex].review;
    name.innerHTML = data[selectedIndex].name;
}
update();

setInterval(update, 5000); // Change review every 5 seconds