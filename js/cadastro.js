//Variáveis
let btn =document.querySelector('#verSenha')
let btnConfirm =document.querySelector('#verConfimSenha')

//campo Nome
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false //variável para conferir e validar

//campo Usuário
let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false //variável para conferir e validar

//campo Senha
let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false //variável para conferir e validar

//campo Confirme Senha
let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false //variável para conferir e validar

//VARIÁVEIS PARA MENSAGENS DE ERRO E SUCESSO
let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

//Eventos
//Campo Nome
nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 8){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'insira seu Nome e Sobrenome';
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

//Campo Usuário
usuario.addEventListener('keyup', ()=> {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'insira no mínimo 4 caracteres'
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        validUsuario = true
    }
})

//Campo Senha
senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'insira no mínimo 6 caracteres';
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

//Campo Confirme Senha
confirmSenha.addEventListener('keyup', ()=> {
    if(senha.value != confirmSenha.value){//conferiri se as senhas são iguais
        labelConfirmSenha.setAttribute('style', 'color: red');
        labelConfirmSenha.innerHTML = 'As Senhas Não Conferem';
        validConfirmSenha = false
    }else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirme Senha'
        validConfirmSenha = true
    }
})

//FUNÇÃO CADASTRAR
function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
        //CADASTRANDO NO LOCALSTORAGE
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        //Salvando no LocalStorage(Criando o Registro)
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        //MENSAGENS DE SUCESSO E ERROR
        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = 'Cadastrando Usuário...'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        
        //Redirecionando para Tela de Login com um delay
        setTimeout(()=>{
            window.location.href = ''
        }, 4000)
       

    } else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha os Campos Corretamente'
        msgSucess.setAttribute('style', 'display: none')
        msgSucess.innerHTML = ''
    }
}

//Função Olho verSenha
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
            inputSenha.setAttribute('type', 'text')
        } else{
            inputSenha.setAttribute('type', 'password')
        }
    }
)


//Função Olho ConfirmSenha
btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
        } else{
            inputConfirmSenha.setAttribute('type', 'password')
        }
    }
)


