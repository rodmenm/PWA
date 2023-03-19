"use strict";

let a = null;
const inst_but = document.getElementById("but_install");
inst_but.addEventListener("click", installar);

window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installar(evt){
    deferredInstallPrompt();
    evt.srcElement.setAttribute('hidden',true);
    deferredInstallPrompt.userChoice.then((choice)=>{
        if(choice.outcome === "accepted"){
            console.log("acepted");
        }else{
            console.log("declined");
        }
        deferredInstallPrompt=null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
    console.log("App instalada");
}