
const verres = document.querySelectorAll('.verre')
const vide = document.querySelector('.vide')
const liquide = document.querySelector('.liquide')

var pourcentage;
var litre;


setInterval(newBulle, 50);
setInterval(moveBulle, 10);

// Selection des petits contenants
verres.forEach((verre, num) => {
    verre.addEventListener('click', function() {

        pourcentage = 0;
        litre = 2;
        verre.classList.toggle('actif')
        
        if (verre.classList.contains('actif')) {
            pourcentage += 12.5
            litre -= 0.250
        }
        activeVerre(num);
    })
})

// Active les verres sélectionnées
function activeVerre(valeur){

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

// Animation des bulles
function moveBulle() {

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

// Ajout de nouvelles bulles
function newBulle() {

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

// Fonction randomise avec paramètre
function rand(valeur) {
    return 1 + Math.floor(Math.random() * valeur) 
}

