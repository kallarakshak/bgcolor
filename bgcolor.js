let color=document.getElementById("color")
let radius=document.getElementById("radius")
let image=document.querySelector("img")

function colorChange(a){
    if(a.key==="Enter"){
        document.body.style.backgroundColor=color.value
    
    }
}
function radiuschange(z){
    console.log(z)
        if(z.key==="Enter"){
            image.style.borderRadius=`${radius.value}px`
    }
}
   
