function reverterDados(form) {
    
    console.log(reverter(form.nome.value));
    console.log(reverter(form.segundo_nome.value));
    console.log(reverter(form.sobrenome.value));
    console.log(reverter(form.email.value));

}
function reverter(texto) {
    console.log(texto);
    var invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return invertido;
}