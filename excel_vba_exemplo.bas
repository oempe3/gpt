
Sub AtualizarViaScript()
    Dim http As Object
    Dim url As String
    Dim dados As String

    Set http = CreateObject("MSXML2.XMLHTTP")
    url = "https://script.google.com/macros/s/SEU_SCRIPT_ID/exec"

    dados = "{""tipo"":""atualizacaoExcel"",""chave"":""Equipamento001"",""novosDados"":[""OK"",""25°C"",""Ligado""]}"

    http.Open "POST", url, False
    http.setRequestHeader "Content-Type", "application/json"
    http.Send dados

    MsgBox http.responseText
End Sub
