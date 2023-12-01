let selectIdioma = document.querySelector('#idiomas');


selectIdioma.addEventListener('change',language);
console.log(selectIdioma.value);
console.log(window.location.pathname);
function language(){
    option=selectIdioma.value;    
    if(option==2){
        location.href="../index.html";
    }else{
        
            location.href="en/index.html";
        
    }
}