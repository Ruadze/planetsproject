const API_URL = "https://planets-api.vercel.app/api/v1/planets/"
const WIKIPEDIA_API_URL =  "https://en.wikipedia.org/wiki/"


const Img = document.querySelector("#img")
const planetDescription = document.querySelector("#planet-description")
const planets = document.querySelectorAll(".planetss")
const rotation = document.querySelector("#rotation")
const revolution = document.querySelector("#revolution")
const radius = document.querySelector("#radius")
const temperature = document.querySelector("#temperature")
const burger = document.querySelector(".burger")
const planetName = document.querySelector("planet-name")
const burgerBtsList = document.querySelector(".burger-bts-list")
const info = document.querySelectorAll(".information")
const structureBtn = document.querySelector("#structure-btn")
const overviewBtn = document.querySelector("#overview-btn")
const geologyBtn = document.querySelector("#geology-btn")
const body = document.querySelector("body")
const header = document.querySelector("header")
const planetsLink = document.querySelectorAll(".planets-link")
const wikipedia = document.querySelector(".wiki")


const getPlanets = async (user) => {
    try {
        const response = await fetch(API_URL + user)
        const data = await response.json() 
        rotation.innerHTML= data.rotation
        revolution.innerHTML = data.revolution
        radius.innerHTML = data.radius
        temperature.innerHTML = data.temperature

        Img.innerHTML =`
        <img class="img" src = "${data.images.planet}" alt = "image of the planet" />`
        planetDescription.innerHTML = `
        <h1 class="planet-name">"${data.name}" </h1>
        <p class="paragraph"> "${data.overview.content}" </p>`

        overviewBtn.addEventListener ("click", () => {
            Img.innerHTML = `
        <img class="img" src="${data.images.planet}" alt = "image of the planet"/>`
        planetDescription.innerHTML = `
        <h1 class="planet-name">"${data.name}" </h1>
        <p class="paragraph">" ${data.overview.content}" <h1>`
        })

        structureBtn.addEventListener ("click", () => {
            Img.innerHTML = `
            <img class="img" src="${data.images.internal}" alt = "image of the planet"/>`
            planetDescription.innerHTML = `
            <h1 class="planet-name">"${data.name}" </h1>
            <p class="paragraph">" ${data.structure.content}" <h1>`
             })

             geologyBtn.addEventListener("click", () => {
                Img.innerHTML = `
                <div><img class="img" src="${data.images.planet}" alt = "image of the planet"/>
                <img class="geology-img" src="${data.images.geology}" alt = "image of the planet"/></div>`
                planetDescription.innerHTML = `
                <h1 class="planet-name">"${data.name}" </h1>
                <p class="paragraph">" ${data.geology.content}" <h1>`
             })

             for(let i = 0; i < planetsLink.length; i++) {
                planetsLink[i].addEventListener ("click", () => {
                    planetsLink[i].textContent = data.name
                    console.log(planetsLink[i])
                })
            }
            } 
             
             catch (error) {
                console.log(error)
            }
    }
    getPlanets("mercury")

    for (let i=0; i<planets.length; i++) {
        planets[i].addEventListener('click', () => {
            getPlanets(planets[i].textContent)
                        })
    }
    const group = document.querySelector(".group")
    const h1 = document.querySelector(".h1")   

    burger.addEventListener ("click", () => {
        burgerBtsList.classList.toggle("show")
        if (burgerBtsList.classList.contains("show")) {
            burger.style.color = "gray" 
            group.style.display = "none"
            // h1.style.display = "flex"
            burger.style.display = "flex"
            burgerBtsList.style.display="block"
            body.style.backgroundImage = "none"
            header.style.backgroundImage = "url('backround-stars.svg')"
        } else {
            group.style.display = "block"
            burgerBtsList.style.display="none"
            body.style.backgroundImage = "url('background-stars.svg')"
         }
    })


    for(let i=0; i< info.length; i++) { 
        info[i].addEventListener ("click",  () => {
            info[i].classList.toggle("clicked")
            if(info[i].classList.contains("clicked")){
                info[i].style.backgroundColor = "rgb(84, 91, 254)"
            } else if (info[i].style.backgroundColor = "rgb(84, 91, 254)") {
                info[i].style.backgroundColor = "unset"
            }
        })
    }