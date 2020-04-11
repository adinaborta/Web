


let buttons=document.querySelectorAll(".dropdown-content button")
function send_to_load()
{
    let diviziuni=document.querySelectorAll(".big-category");
    let meniu_intro=document.querySelector(".little-category");
    let height=meniu_intro.offsetHeight;
    let buton_accesat
    buttons.forEach(button => {
        if(button.classList.contains(clasa_optiune)){
            buton_accesat=button;
        }
    })
    
    i=0;
    while(buttons[i] != buton_accesat)
    {
        height=height + diviziuni[i].offsetHeight;
        i++;
        console.log(buttons[i])
    }
    window.scrollTo(0, height);
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const clasa_optiune = urlParams.get('optiune');
if(clasa_optiune!=undefined){
    window.addEventListener("load", send_to_load);
}





function send_to()
{
    let diviziuni=document.querySelectorAll(".big-category");
    let meniu_intro=document.querySelector(".little-category");
    let height=meniu_intro.offsetHeight;
    
    
    i=0;
    while(buttons[i] != event.currentTarget)
    {
        height=height + diviziuni[i].offsetHeight;
        i++;
        console.log(buttons[i])
    }
    window.scrollTo(0, height);
}


buttons.forEach(option => {
    option.addEventListener("click", send_to);
});











function animatii()
{
    let diviziunii=document.querySelectorAll(".little-category");
    let verticalScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let heightt= 0;
    let vh=window.innerHeight;
    let header= document.querySelectorAll("div.deflexat");

    for(i=0;i<=4;i++)
    {
        
        heightt= heightt+diviziunii[i].offsetHeight/6 - vh;


        if(verticalScroll>heightt){
            let pare=document.querySelectorAll(`.div${i+1} .par`)
            let impare=document.querySelectorAll(`.div${i+1} .impar`)

            pare.forEach(par => {
                par.classList.add("animatie_par");
            });
            impare.forEach(impar => {
                impar.classList.add("animatie_impar");
            });
        }
        if(i==0)
        {
            heightt=heightt + header[0].offsetHeight;
        }
        if(i==2 || i==3)
        {
            heightt=heightt + header[i-2].offsetHeight;
        }
        
        heightt=heightt + 5* diviziunii[i].offsetHeight /6 + vh;
    }
    
}


animatii();
window.addEventListener("scroll", animatii);



var curr_img, next_img;


function switch_img(){

    let imagini=document.querySelectorAll(".imagine");

    for(let i=0;i<imagini.length;i++){
        let imgs=document.querySelectorAll(`.divv${i} img`)
        for(let i=0 ; i<imgs.length ; i++)
    {
        if(imgs[i].classList.contains("in_focus"))
        {   
            curr_img=imgs[i];
            if(i!=imgs.length - 1)
                {next_img=imgs[i+1];}
            else
                {next_img=imgs[0];}

            break;
        }
    }
    curr_img.classList.remove("in_focus");
    curr_img.classList.add("not_in_focus");
    next_img.classList.remove("not_in_focus");
    next_img.classList.add("in_focus");
    }
    

}

var intervalID2 = window.setInterval(switch_img, 6000);













