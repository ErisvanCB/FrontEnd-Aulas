// function DarkMode(){
//     var htmlBody = document.body;

//     htmlBody.className = "darkMode"
// }

// function LightMode(){
//     var htmlBody = document.body

//     htmlBody.className = ""
// }

// const darkMode = () => {

// }

function DarkMode(){
    let htmlBody = document.body;
    let btnDoTema = document.getElementById("btnTema");

    // Modifica o nome da classe do body
    htmlBody.classList.toggle("darkMode");

    // Modifica o texto do documento
    if(htmlBody.className == "darkMode"){
        btnDoTema.innerText = "Light Mode";
    } else{
        btnDoTema.innerText = "Dark Mode";
    }



    // document.getElementById('mudar').value = "Light Mode";
    
    // htmlBody.className.toggle("darkMode");

    // if(htmlBody.className != "darkMode"){
    //     htmlBody.className = "darkMode";
    // } else{
    //     htmlBody.className = "";
    // }

}