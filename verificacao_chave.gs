
function verificarChaveExistente(chave) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dados");
  const chaves = sheet.getRange("A2:A" + sheet.getLastRow()).getValues().flat();
  return chaves.includes(chave);
}
