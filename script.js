
const verres = document.querySelectorAll('.verre')
const vide = document.querySelector('.vide')
const liquide = document.querySelector('.liquide')

var pourcentage;
var litre;

setInterval(newBall, 50);
setInterval(moveBall, 10);

function moveBall() {

    var bulles = document.querySelectorAll('.bulle');
    bulles.forEach((bulle, num) => {

        let bulleY = bulle.offsetTop;
        bulleY -= rand(6);
        bulle.style.top = bulleY + "px";

        if (bulleY < 0) {
            bulle.remove();
        }
        bulle.style.top = bulleY + "px";
    })

}

function newBall() {

    let bulle = document.createElement('div');
    bulle.classList.add('bulle');
    bulle.style.top = (liquide.offsetHeight) + "px"
    bulle.style.left = rand(liquide.offsetWidth) + "px"
    
    bulle.style.top += "px"
    bulle.style.left += "px"

    let tailleBulle = rand(5)
    bulle.style.width = tailleBulle + "px"
    bulle.style.height = tailleBulle + "px"

    liquide.appendChild(bulle);

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





