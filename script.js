const container = document.querySelector('#container');

const button = document.querySelector('.btx')

function randomColor(){
    let color = [];
    for(let i=0;i<3;i++){
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb('+color.join(',') + ')';
}
console.log(randomColor())

function createGrid(a){
    for( i=0; i<a; i++){
        let div = document.createElement('div');
        div.classList.add('newDivs')
        container.appendChild(div)
    }

    let allNewDivs = document.querySelectorAll('.newDivs')
    let val = 1;

    for (let i=0; i<allNewDivs.length; i++){
        allNewDivs[i].addEventListener('mouseover', () => {
            /*allNewDivs[i].classList.add('hover');*/
            allNewDivs[i].style.backgroundColor =randomColor();
            allNewDivs[i].style.filter = "brightness(" + val + ")";
            val*= 0.99;
        /* allNewDivs[i].classList.remove('hoverout')*/
        })
        allNewDivs[i].addEventListener('mouseleave', () => {
            
        })

    }
}

createGrid(256);

function cleanGrid(){
    let allNewDivs = document.querySelectorAll('.newDivs')
    allNewDivs.forEach((div) =>{
        div.remove()
    })
}


button.addEventListener('click', () => {
    let pr = prompt("Please enter the amount of squares for the sketch needed!")
    cleanGrid()
    createGrid(pr)
})






