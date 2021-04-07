document.getElementById("botaoenviar").addEventListener("click", ValidaFormulario)

function ValidaFormulario(){
  if(document.getElementById("nome").value != "" &&  document.getElementById("email").value != ""&& document.getElementById("telefone").value != ""){
    alert("Pronto! Em breve entraremos em contato.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}