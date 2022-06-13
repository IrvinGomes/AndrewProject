function reverterDados(form) {
    
    console.log(reverter(form.nome.value));
    console.log(reverter(form.segundo_nome.value));
    console.log(reverter(form.sobrenome.value));
    console.log(reverter(form.email.value));
    console.log(reverter(form.telefone.value));
    document.getElementById("rnome").innerHTML = reverter(form.nome.value);
    document.getElementById("rsegundo_nome").innerHTML = reverter(form.segundo_nome.value);
    document.getElementById("rsobrenome").innerHTML = reverter(form.sobrenome.value);
    document.getElementById("remail").innerHTML = reverter(form.email.value);
    document.getElementById("rtelefone").innerHTML = reverter(form.telefone.value);
}
function reverter(texto) {
    console.log(texto);
    var invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return invertido;
}