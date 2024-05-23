
let textarea = document.getElementById('text')
let resultat = document.getElementById('res')

const textRes = () =>{
    resultat.innerHTML = textarea.value
}

textarea.oninput = () =>{
localStorage.setItem('textkey',textarea.value);
textRes();
};

window.onload = () => {
textarea.value = localStorage.getItem("textkey") ||"";
textRes();
};