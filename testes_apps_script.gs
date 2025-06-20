
function testeCadastro() {
  var resposta = cadastrarUsuario("João Teste", "joao@teste.com");
  Logger.log(resposta.getContent());
}

function testeLogin() {
  var resposta = validarLogin("joao@teste.com", "abc123");
  Logger.log(resposta.getContent());
}

function testeAtualizacao() {
  var resposta = atualizarViaExcel({ chave: "Equipamento001", novosDados: ["OK", "25°C", "Ligado"] });
  Logger.log(resposta.getContent());
}
