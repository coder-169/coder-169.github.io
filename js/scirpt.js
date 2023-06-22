let filterButtons = document.querySelectorAll(".filter-skill-btn");
const backendList = document.querySelector("#backend");
const databasesList = document.querySelector("#databases");
const frontendList = document.querySelector("#frontend");
const extrasList = document.querySelector("#extras");

filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let innerText = event.target.innerText.toLowerCase();
        console.log(innerText);
        if (innerText === "frontend") {
            frontendList.classList.add("grid");
            frontendList.classList.remove("hidden");
            extrasList.classList.add("hidden");
            databasesList.classList.add("hidden");
            backendList.classList.add("hidden");
        } else if (innerText === "databases") {
            databasesList.classList.add("grid");
            databasesList.classList.remove("hidden");
            extrasList.classList.add("hidden");
            frontendList.classList.add("hidden");
            backendList.classList.add("hidden");
        } else if (innerText === "backend") {
            backendList.classList.add("grid");
            backendList.classList.remove("hidden");
            extrasList.classList.add("hidden");
            frontendList.classList.add("hidden");
            databasesList.classList.add("hidden");
        } else if (innerText === "extras") {
            extrasList.classList.add("grid");
            extrasList.classList.remove("hidden");
            frontendList.classList.add("hidden");
            databasesList.classList.add("hidden");
            backendList.classList.add("hidden");
        }
    });
});

const scrollBottom = () => {
    window.scrollTo(0, 50000);
};

const profession = document.querySelector("#profession");

let str1 = `WEB DEVELOPER`;
let idx = 0;
let interval = 
setInterval(() => {
    if (idx > str1.length - 1) {
        idx = 0;
        profession.innerText = "";
    }
    // clearInterval
    profession.innerHTML += str1[idx];
    idx++;
}, 200);
