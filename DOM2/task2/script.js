let button = document.getElementById("btn");
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "Yy you were <b>clicked</b> as the other para";
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click")
})


document.addEventListener("keydown", (e)=>{
    console.log(e.key)
})