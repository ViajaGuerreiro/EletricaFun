var usuCad;
var senCad;

function cadastrarUsu() {
    usuCad = document.getElementById("cxCadUsu").value;
    senCad = document.getElementById("cxCadSen").value;

    alert("Usuario Cadastrado");

    document.getElementById("cadastrar").className = "invisible m-1 p-1";
    document.getElementById("login").className = "visible";
}

function loginUsu() {
    usuLog = document.getElementById("cxLog").value;
    senLog = document.getElementById("cxSen").value;

    if(usuLog == usuCad && senLog == senCad) {
        document.location = "view/videos.html";
        logado = 1;
    }
    else {
        alert("Usuario ou Senha incorretos");
    }
}

function cadastrarDiv() {
    document.getElementById("login").className = "invisible ";
    document.getElementById("cadastrar").className = "visible";
}

function loginDiv() {
    document.getElementById("cadastrar").className = "invisible ";
    document.getElementById("login").className = "visible";
}
