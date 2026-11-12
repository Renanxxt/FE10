function lerCookies() {
    var atual = document.cookie;   // ✅ CORRETO: "cookie" sem "s"
    document.getElementById("demo-ler").innerHTML =
        atual ? "Cookies: " + atual : "(nenhum cookie)";
}
function apagarTema() {
    document.cookie = "tema=; max-age=0; path=/; SameSite=Lax";   // ✅ CORRETO
    document.getElementById("demo-tema-resultado").innerHTML =
        "Cookie tema apagado";
}

function gravarTemaParaApagar() {
    var valor = document.getElementById("demo-tema-apagar").value;
    document.cookie = "tema=" + encodeURIComponent(valor) + "; max-age=3600; path=/";
    document.getElementById("demo-tema-resultado").innerHTML =
        "Cookie tema=" + valor + " gravado";
}
function gravarTema() {
    var valor = document.getElementById("tema").value;   // ✅ CORRETO: id="tema"
    document.cookie = "tema=" + encodeURIComponent(valor) + "; max-age=3600; path=/";
    document.getElementById("demo-gravar-resultado").innerHTML = "Cookie tema=" + valor + " gravado";
}