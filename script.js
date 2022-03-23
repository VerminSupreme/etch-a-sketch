var gridDivs = document.getElementById("grid");
const newGridButton = document.getElementById("newGridButton");

createGrid(16);



function popUp(){
    let sideLength = prompt("How many cubes per side?");
    if (sideLength < 100){
    gridDivs.innerHTML="";
    createGrid(sideLength);
    }
}

function createGrid(x){

    let sideLength = 400/x;
    let amnt = x*x;
    for(let i = 0; i < amnt; i++){
    const cube = document.createElement('div');
    cube.classList.add('grid-cube');
    cube.style.height = sideLength + "px";
    cube.style.width = sideLength + "px";
    cube.addEventListener('mouseenter', hoveredState);
    gridDivs.appendChild(cube);
    }
}

function hoveredState(e){
    e.target.classList.add("colorChange");
}

function hoveredStateLeave(e){
    e.target.classList.remove("colorChange");
}