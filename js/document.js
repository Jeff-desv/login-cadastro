//VARIÁVEIS

//BOTÃO
let btn =document.querySelector('.fa-eye')

//USUÁRIO
let usuario = document.querySelector('#usuario')
let userLabel = document.querySelector('#userLabel')

//SENHA
let senha = document.querySelector('#senha')
let senhaLabel = document.querySelector('#senhaLabel')

//MENSAGEM DE ERRO
let msgError = document.querySelector('#msgError')

//LISTA DE USUÁRIO
let listaUser = []

//VARIÁVEL VALIDAÇÃO
let userValid = { //OBJETO PARA RECEBER OS DADOS
    nome: '',
    user: '',
    senha: ''
}
//FIM VARIÁVEIS


//Função Ver senha
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
            inputSenha.setAttribute('type', 'text')
        } else{
            inputSenha.setAttribute('type', 'password')
        }
    }
)

//validação login
function entrar(){
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item)=>{

        if(usuario.value == item.userCad && senha.value == item.senhaCad){
           
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })
   
        if(usuario.value == userValid.user && senha.value == userValid.senha){
            
            //Redirecionando para outra página
            setTimeout(()=>{
                window.location.href = ''
            }, 4000)

            //Criando um Token para guardar no LocalStorage e permanecer logado
            let token = Math.random().toString(16).substr(2)
            localStorage.setItem('token', token)

        } else{
            userLabel.setAttribute('style', 'color: red')
            usuario.setAttribute('style', 'border-color: red')
            senhaLabel.setAttribute('style', 'color: red')
            senha.setAttribute('style', 'border-color: red')
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = 'Usuário ou Senha Incorretos'
            usuario.focus()
        }
    
}