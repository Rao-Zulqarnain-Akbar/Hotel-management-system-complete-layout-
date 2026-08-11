document.querySelector("#btn").addEventListener("click", ()=>{
    document.querySelector("#heading").style.color = "red";
    document.querySelector("#heading").innerHTML = "Hello Optimum";
    // document.querySelector("#heading").classList.add("active");
    // document.querySelector("#heading").classList.remove("active");
    document.querySelector("#heading").classList.toggle("active");
})

document.querySelector("#btn").addEventListener("click", ()=>{
    let param = document.querySelectorAll("#para");
    param.forEach((e) =>{
        e.innerHTML= "We are changed now";
    })
})