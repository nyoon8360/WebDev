
let albumimgIndex = ["/assets/cooking.png", "/assets/candidpic.png", "/assets/airport.jpg"];
let albumIndex = 1;
onPageStart();

function onPageStart() {
    let imgAlbum = document.getElementById("albumimg");

    imgAlbum.addEventListener("click", clickedImg);
}

function clickedImg(event) {
    let imgElement = document.getElementById("albumimg");
    albumIndex = (albumIndex + 1) % 3;
    imgElement.src = albumimgIndex[albumIndex - 1];
    imgElement.classList.remove("fadeimg");
    void imgElement.offsetHeight;
    imgElement.classList.add("fadeimg");
}