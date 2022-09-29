
const verres = document.querySelectorAll('.verre')
const vide = document.querySelector('.vide')
const liquide = document.querySelector('.liquide')

var pourcentage;
var litre;
var tabVitBalle = [];

setInterval(running, 10);
setInterval(newBall, 50);
setInterval(moveBall, 10);

function running() {

}

function moveBall() {

    var balles = document.querySelectorAll('.bulle');
    balles.forEach((balle, num) => {

        let balleY = balle.offsetTop;
        balleY -= rand(8);
        balle.style.top = balleY + "px";
        if (balleY < 0) {
            balle.remove();
           
        }
        

    })

}

function newBall() {

    let balle = document.createElement('div');
    balle.classList.add('bulle');
    balle.style.top = (liquide.offsetHeight) + "px"
    balle.style.left = rand(liquide.offsetWidth) + "px"
    
    balle.style.top += "px"
    balle.style.left += "px"

    let tailleBalle = rand(5)
    balle.style.width = tailleBalle + "px"
    balle.style.height = tailleBalle + "px"

    liquide.appendChild(balle);

    // console.log(balle.style.bottom,balle.style.left );

}

verres.forEach((verre, num) => {
    verre.addEventListener('click', function() {
        pourcentage = 0;
        litre = 2;
        verre.classList.toggle('actif')
        
        if (verre.classList.contains('actif')) {
            pourcentage += 12.5
            litre -= 0.250
        }

        actif(num);
    })
})

function actif(valeur){

    verres.forEach((verre, num) => {
        
        if (num < valeur) {
            pourcentage += 12.5
            litre -= 0.250
            verre.classList.add("actif")
        } else if (num > valeur) {
            verre.classList.remove("actif")
        }

        liquide.style.height = pourcentage + "%"
        liquide.innerHTML = pourcentage + "%"
        vide.style.height = 100 - pourcentage + "%"
        vide.innerHTML = litre + "L"

    })
}

function rand(valeur) {

    return 1 + Math.floor(Math.random() * valeur)
    
}





