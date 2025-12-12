const box = document.getElementById("box");


box.addEventListener("click" , ()=> {
    box.textContent = "Clicked"
    box.style.color = "red"
})


box.addEventListener("dblclick", ()=> {
    box.textContent = "Double Clicked"
    box.style.color = "yellow"

})

box.addEventListener("mouseover", ()=> {
    box.textContent = "Mouse Over "
    box.style.backgroundColor = "pink"

})
box.addEventListener("mouseout" , ()=>{
    box.textContent = "Mouse Out "
    box.style.backgroundColor = "orange"


})