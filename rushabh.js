const firstD = document.getElementById("coverage-info1")
const secondD = document.getElementById("coverage-info2")
const thirdD = document.getElementById("coverage-info3")
const fourthD = document.getElementById("coverage-info4")
const fifthD = document.getElementById("coverage-info5")
const firstDI = document.getElementById("firstDI")
const secondDI = document.getElementById("secondDI")
const thirdDI = document.getElementById("thirdDI")
const fourthDI = document.getElementById("fourthDI")
const fifthDI = document.getElementById("fifthDI")


secondD.style.display = "none"
thirdD.style.display = "none"
fourthD.style.display = "none"
fifthD.style.display = "none"
firstDI.style.borderBottom = "5px solid dodgerblue"

function resetStyle(info){
    firstD.style.display = "none"
    secondD.style.display = "none"
    thirdD.style.display = "none"
    fourthD.style.display = "none"
    fifthD.style.display = "none"
    info.style.display = "flex"
   
}
function resetColor(info){
    fifthDI.style.borderBottom = "5px solid transparent"
    secondDI.style.borderBottom = "5px solid transparent"
    thirdDI.style.borderBottom = "5px solid transparent"
    fourthDI.style.borderBottom = "5px solid transparent"
    firstDI.style.borderBottom = "5px solid transparent"
    info.style.borderBottom = "5px solid dodgerblue"
}

firstDI.addEventListener("click",()=>{
    resetStyle(firstD)
    resetColor(firstDI)
})
secondDI.addEventListener("click",()=>{
    resetStyle(secondD)
    resetColor(secondDI)
})
thirdDI.addEventListener("click",()=>{
    resetStyle(thirdD)
    resetColor(thirdDI)
})
fourthDI.addEventListener("click",()=>{
    resetStyle(fourthD)
    resetColor(fourthDI)
})
fifthDI.addEventListener("click",()=>{
    resetStyle(fifthD)
    resetColor(fifthDI)
})

// must watch
const moving1 = document.getElementById("pic-no1")
const moving2 = document.getElementById("pic-no2")
const moving3 = document.getElementById("pic-no3")
const moving4 = document.getElementById("pic-no4")
const moving5 = document.getElementById("pic-no5")

moving2.style.display = "none"
moving3.style.display = "none"
moving4.style.display = "none"
moving5.style.display = "none"
let arrOfPics = [moving1,moving2,moving3,moving4,moving5]
let indexOfMovingPics = -1
setInterval(()=>{
    indexOfMovingPics++
    moving1.style.display = "none"
    moving2.style.display = "none"
    moving3.style.display = "none"
    moving4.style.display = "none"
    moving5.style.display = "none"
    arrOfPics[indexOfMovingPics].style.display = "block"
   if(indexOfMovingPics==4){
    indexOfMovingPics= -1
   }
},3000)


//ad image

const adImage = document.getElementsByClassName("adImageLinks")
adImage[0].style.display = "none"
adImage[1].style.display = "none"
adImage[2].style.display = "none"
adImage[3].style.display = "none"

let randomImageIndex = Math.floor(Math.random()*4)
adImage[randomImageIndex].style.display = "block"

//non moving but swipable

const nonmoving1 = document.getElementById("number-crunching-info1")
const nonmoving2 = document.getElementById("number-crunching-info2")
const nonmoving3 = document.getElementById("number-crunching-info3")
const nonmoving4 = document.getElementById("number-crunching-info4")
const nonmoving5 = document.getElementById("number-crunching-info5")

nonmoving2.style.display = "none"
nonmoving3.style.display = "none"
nonmoving4.style.display = "none"
nonmoving5.style.display = "none"


const iconCircle2 = document.getElementsByClassName("iconCircle2")
iconCircle2[0].style.backgroundColor = "black"
iconCircle2[0].style.borderRadius = "50%"
function swipe(icon){
    nonmoving1.style.display = "none"
        nonmoving2.style.display = "none"
        nonmoving3.style.display = "none"
        nonmoving4.style.display = "none"
        nonmoving5.style.display = "none"
        icon.style.display = "block"
}
function swipeColor(icon){
    iconCircle2[0].style.backgroundColor = "transparent"
    iconCircle2[1].style.backgroundColor = "transparent"
    iconCircle2[2].style.backgroundColor = "transparent"
    iconCircle2[3].style.backgroundColor = "transparent"
    iconCircle2[4].style.backgroundColor = "transparent"
    icon.style.backgroundColor = "black"
    icon.style.borderRadius = "50%"
}
iconCircle2[0].addEventListener("click",()=>{
    swipe(nonmoving1)
    swipeColor(iconCircle2[0])
    
})
iconCircle2[1].addEventListener("click",()=>{
    swipe(nonmoving2)
    swipeColor(iconCircle2[1])
})
iconCircle2[2].addEventListener("click",()=>{
    swipe(nonmoving3)
    swipeColor(iconCircle2[2])
})
iconCircle2[3].addEventListener("click",()=>{
    swipe(nonmoving4)
    swipeColor(iconCircle2[3])
})
iconCircle2[4].addEventListener("click",()=>{
    swipe(nonmoving5)
    swipeColor(iconCircle2[4])
})

//ad image 2

const adImage2 = document.getElementsByClassName("adImageLinks2")
adImage2[0].style.display = "none"
adImage2[1].style.display = "none"
adImage2[2].style.display = "none"
adImage2[3].style.display = "none"

let randomImageIndex2 = Math.floor(Math.random()*4)
adImage2[randomImageIndex2].style.display = "block"

//ad image 3

const adImage3 = document.getElementsByClassName("adImageLinks3")
adImage3[0].style.display = "none"
adImage3[1].style.display = "none"
adImage3[2].style.display = "none"
adImage3[3].style.display = "none"

let randomImageIndex3 = Math.floor(Math.random()*4)
adImage3[randomImageIndex3].style.display = "block"