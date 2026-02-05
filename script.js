document.getElementById("formulario").addEventListener("submit", function(e){
  e.preventDefault();

  let dados = {
    nome: this[0].value,
    whatsapp: this[1].value,
    servico: this[2].value,
    data: this[3].value,
    valor: this[4].value,
    pagamento: this[5].value,
    funcionaria: this[6].value,
    comissao: this[7].value,
    obs: this[8].value
  };

  let lista = JSON.parse(localStorage.getItem("atendimentos")) || [];
  lista.push(dados);
  localStorage.setItem("atendimentos", JSON.stringify(lista));

  alert("Atendimento salvo!");
  this.reset();
});
