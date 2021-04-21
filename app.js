// 1.VARIABLES
const inputUser = document.querySelector('.form-groupe:nth-child(1) input');
const inputMail = document.querySelector('.form-groupe:nth-child(2) input');
const inputPassword = document.querySelector('.form-groupe:nth-child(3) input');
const inputConfirm = document.querySelector('.form-groupe:nth-child(4) input');
const allImages = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLines = document.querySelectorAll('.ligne div');



// 2.VALIDATION INPUT USER (3 CARACTERES MINIMUM)
inputUser.addEventListener('input', (event) => {

    if(event.target.value.length >= 3) {
        allImages[0].style.display = "inline";
        allImages[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    }   
    else {
        allImages[0].style.display = "inline";
        allImages[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }

})

// 3.VALIDATION MAIL (REGEX)
inputMail.addEventListener('input', (event) => {

    const regexEmail = /\S+@\S+\.\S+/;
    // S = ensemble des caractères sauf espaces
    
    if(event.target.value.search(regexEmail) === 0){
        // La méthode search compare la value à la regex. Si correspondanceagesc'est = à 0. 
        //Si pas de correspondance : -1

        allImages[1].style.display = "inline";
        allImages[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";

    } else if(event.target.value.search(regexEmail) === -1) {

        allImages[1].style.display = "inline";
        allImages[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";

    }

})

// 4.VALIDATION MAIL (MDP)

let valuePassword;
const specialCar = /[^a-zA-Z0-9]/;//Tous les caractères spéciaux
const alphabet = /[a-z]/i; // i pour insensible à lacasse
const chiffres = /[0-9]/;

validation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

inputPassword.addEventListener('input', (e) => {

    valuePassword = e.target.value;

    if(valuePassword.search(specialCar) !== -1){
        validation.symbole = 1;
    }
    if(valuePassword.search(alphabet) !== -1){
        validation.lettre = 1;
    }
    if(valuePassword.search(chiffres) !== -1){
        validation.chiffre = 1;
    }
    console.log(validation);

    // Quand on efface des caractères de l'input
    if(e.inputType = 'deleteContentBackward'){
         if(valuePassword.search(specialCar) === -1){
        validation.symbole = 0;
    }
         if(valuePassword.search(alphabet) === -1){
        validation.lettre = 0;
    }
         if(valuePassword.search(chiffres) === -1){
        validation.chiffre = 0;
    }
    } 
    // Combien de propriétés du mot de passe validées?
    let testAll = 0;
        for(const property in validation){

        if(validation[property] > 0){
        testAll++;
        }
    }

         if(testAll < 3){
            allSpan[2].style.display = "inline";
            allImages[2].style.display = "inline";
            allImages[2].src = "ressources/error.svg";
        } else {
            allSpan[2].style.display = "none";
            allImages[2].src = "ressources/check.svg";
        }

    //force du mot de passe
    if(valuePassword.length <= 6 && valuePassword.length > 0){
        allLines[0].style.display = 'block';
        allLines[1].style.display = 'none';
        allLines[2].style.display = 'none';
    }
    else if (valuePassword.length > 6 && valuePassword.length <= 9) {
        allLines[0].style.display = 'block';
        allLines[1].style.display = 'block';
        allLines[2].style.display = 'none';
    }
    else if (valuePassword.length > 9) {
        allLines[0].style.display = 'block';
        allLines[1].style.display = 'block';
        allLines[2].style.display = 'block';
    }
    else if (valuePassword.length === 0) {
        allLines[0].style.display = 'none';
        allLines[1].style.display = 'none';
        allLines[2].style.display = 'none';
    }


});

// 5. CONFIRMATION MDP


    
inputConfirm.addEventListener('input', (e) =>{
    if(e.target.value === valuePassword){
        allImages[3].style.display = "inline";
        allImages[3].src = "ressources/check.svg";
        
    }else{
        allImages[3].src = "ressources/error.svg";
    }
})



