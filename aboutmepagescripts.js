
let albumimgIndex = ["/assets/cooking.png", "/assets/candidpic.png", "/assets/airport.png"];
let artistAlbumArray = new Map();
artistAlbumArray.set("dprian","/assets/dprian.jpg");
artistAlbumArray.set("keshi","/assets/keshi.jpg");
artistAlbumArray.set("lauv","/assets/lauv.jpg");
artistAlbumArray.set("shymartin","/assets/shymartin.jpg");
artistAlbumArray.set("slchld","/assets/slchld.png")
let albumIndex = 0;
onPageStart();

function onPageStart() {
    let imgAlbum = document.getElementById("albumimg");
    let keshiEl = document.getElementById("keshi");
    let shymartinEl = document.getElementById("shymartin");
    let lauvEl = document.getElementById("lauv");
    let dprianEl = document.getElementById("dprian");
    let slchldEl = document.getElementById("slchld");

    imgAlbum.addEventListener("click", clickedImg);
    keshiEl.addEventListener("mouseover", hoverImg);
    shymartinEl.addEventListener("mouseover", hoverImg);
    lauvEl.addEventListener("mouseover", hoverImg);
    dprianEl.addEventListener("mouseover", hoverImg);
    slchldEl.addEventListener("mouseover", hoverImg);
}

function clickedImg(event) {
    let imgElement = document.getElementById("albumimg");
    albumIndex = (albumIndex + 1) % 3;
    imgElement.src = albumimgIndex[albumIndex];
    imgElement.classList.remove("fadeimg");
    void imgElement.offsetHeight;
    imgElement.classList.add("fadeimg");
}

function hoverImg(event) {
    let imgElement = document.getElementById("albumimg");
    let artistKey = event.currentTarget.id;

    imgElement.src = artistAlbumArray.get(artistKey);
    imgElement.classList.remove("fadeimg");
    void imgElement.offsetHeight;
    imgElement.classList.add("fadeimg");
}