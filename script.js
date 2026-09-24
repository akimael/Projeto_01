const formulario = document.querySelector(".agendamento form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = formulario.querySelector('input[type="text"]').value;
    const whatsapp = formulario.querySelector('input[type="tel"]').value;
    const servico = formulario.querySelector("select").value;
const nomeServico = formulario.querySelector("select").options[formulario.querySelector("select").selectedIndex].text;
    alert(
        "Nome: " + nome +
        "\nWhatsApp: " + whatsapp +
        "\nServiço: " + servico
    );
});