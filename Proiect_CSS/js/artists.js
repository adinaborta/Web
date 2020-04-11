let sum=0;

const suma= () =>{
    sum=0;
    let divs=document.querySelectorAll("main .tot")
    console.log(divs);
    divs.forEach(diviziune =>{
        sum+=diviziune.offsetHeight;
    });

}
window.addEventListener("load", suma);
window.addEventListener("resize", suma);

const down = () =>{
    window.scrollTo(0, sum);
}

let buton= document.querySelector("button.submitart");


buton.addEventListener("click", down);

function submitt(){
    alert("Desenul tau a fost inregistrat");
}

