const paragrafo = document.getElementById("mensagem");
const checaCaps = (event) => {
    if(event.shiftKey){
        paragrafo.innerHTML = "Atenção: SEGURANDO O SHIFT"
    }else{
        paragrafo.innerHTML = " ";
    }
}