const rivews = [
  {
    name: "Cherise G",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

const personName = document.querySelector(".personName");
const para = document.querySelector(".para");
index = 0;
 
update();
function update() {
  const { name, text } = rivews[index];
  personName.innerHTML = name;
  para.innerHTML = text;
  index++;
  if (index === rivews.length) {
    index = 0;
  }
  setTimeout(() => {
    update();
  }, 1000);
}
