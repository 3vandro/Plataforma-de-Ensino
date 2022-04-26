
const user = {
    email: 'cle@cle.com',
    nomeDeExibicao: "CLE",
    password: 1234,
}


// Login
function validarLogin()  {
    let typedUsuario = document.getElementById("usuario").value;

    let typedPassword = document.getElementById("senhausuario").value;

    if(typedUsuario == user.email && typedPassword == user.password){
        alert("Usuário e Senha corretos! Login feito com SUCESSO!");
        window.location.href = "userarea.html";
    }else{
        alert("E-mail ou Senha incorretos! Tente novamente!")
}
}

