let imgs = document.querySelectorAll("#slideshow>img")
let intervalId
document.getElementById("start").addEventListener("click", function(){

    let index = 0
    intervalId = setInterval(function(){

        for(let i=0;i<imgs.length;i++){
            imgs[i].style.display = "none"
        }

        if(index==imgs.length){
            index=0
        }
        imgs[index++].style.display = "block"

    }, 1000)

})

document.getElementById("stop").addEventListener("click", function(){

    clearInterval(intervalId)
})
       
setInterval(function movieDetail(){
    document.getElementById("select").innerHTML = "Babylon"
},5000)

setInterval(function movieDetail(){
    document.getElementById("select02").innerHTML = "Ghostbusters: Frozen Empire"
},5500)

setInterval(function movieDetail(){
    document.getElementById("select03").innerHTML = "Interstellar"
},6000)

setInterval(function movieDetail(){
    document.getElementById("select04").innerHTML = "Once Upon a Time... in Hollywood"
},6500)

setInterval(function movieDetail(){
    document.getElementById("select05").innerHTML = "Killers of the Flower Moon"
},7000)


