const reviews = [
  {
    id: 1,
    name: "ram",
    job: "web developer",
    img:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
    text:
      "Mental Health Review Journal (MHRJ) is a vital source of current thinking on the research, policy and practice of mental health service delivery, bringing together research and practice perspectives."
  },
  {
    id: 2,
    name: "anees",
    job: "web designer",
    img:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
    text:
      "On the milder end of the psychosocial spectrum, many of the experiences of patients, family members, and the public can be appropriately normalized by providing information about usual reactions to this kind of stress and by pointing out that people can and do manage even in the midst of dire circumstances."
  },
  {
    id: 3,
    name: "james",
    job: "intern",
    img:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
    text:
      "As for health care providers themselves, the novel nature of SARS-CoV-2, inadequate testing, limited treatment options, insufficient PPE and other medical supplies, extended workloads, and other emerging concerns are sources of stress and have the potential to overwhelm systems. "
  },
  {
    id: 4,
    name: "san",
    job: "the boss",
    img:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
    text:
      "Opportunities to monitor psychosocial needs and deliver support during direct patient encounters in clinical practice are greatly curtailed in this crisis by large-scale home confinement. Psychosocial services, which are increasingly delivered in primary care settings, are being offered by means of telemedicine."
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
