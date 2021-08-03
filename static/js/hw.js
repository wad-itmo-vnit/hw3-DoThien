var modal = document.getElementById("myModal");
var modalImg = document.getElementById("myImg");
var captionImg = document.getElementById("caption");
var layoutImgs = Array.from(document.getElementsByClassName("layout-img"));
var span = document.getElementById("spanimg");


for (const layoutImg of layoutImgs) {
    layoutImg.onclick = (e) => {
        modal.style.display = "block";
        modalImg.src = e.target.src;
        captionImg.innerHTML = e.target.alt;
    }
}

span.onclick = () => {
    modal.style.display = "none";
}

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        modal.style.display = "none";
    }
})

modal.onclick = (e) => {
    if (e.target === modalImg) {
        return;
    }
    modal.style.display = "none";
}

