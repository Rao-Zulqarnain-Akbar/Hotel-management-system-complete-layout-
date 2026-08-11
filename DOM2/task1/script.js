// let div = document.createElement("div");
// div.innerHTML = "I have been inserted as inner HTML <b> by Zulqarnain </b>";
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div);


let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<b>I am under the water.Please help me</b>")
cont.classList.add("minor");
cont.classList.remove("red");
