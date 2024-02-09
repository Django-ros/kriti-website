const reviews = [
  {
    id: 1,
    name: "ram",
    job: "web developer",
    img:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
  },
  {
    id: 2,
    name: "anees",
    job: "web designer",
    img:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
  },
  {
    id: 3,
    name: "james",
    job: "intern",
    img:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
    text:
      "SLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
  },
  {
    id: 4,
    name: "san",
    job: "the boss",
    img:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
  }
];

const img = document.getElementById("person-img");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
