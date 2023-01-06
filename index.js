let firstPage = document.querySelector(".content")
let secondPage = document.querySelector(".content2")
let submitBtn = document.getElementById("btn")
let rateAgain = document.getElementById("tekraroyla")
let rating = document.getElementById("rating")
let stars = document.querySelectorAll(".star")

submitBtn.addEventListener("click", () => {
    secondPage.classList.remove("hidden")
    firstPage.style.display ="none"
})
rateAgain.addEventListener("click", () => {
    secondPage.classList.add("hidden")
    firstPage.style.display ="block"
})

stars.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})