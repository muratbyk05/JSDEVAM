function temizle(){
    document.body.remove()
}

function das(){
    document.body.style.backgroundColor="red";
    document.body.style.Color="yellow";
    document.body.style.fontSize="5rem";
    document.getElementById("logo").setAttribute("src","images/logo.png");
    document.getElementsByTagName("h3")[0].innerHTML="naber";
    let yenibuton=document.createElement("button");
    document.body.appendChild(yenibuton);
    yenibuton.innerText="temizle";
    yenibuton.addEventListener("click",temizle);
}                   