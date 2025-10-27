const form = document.getElementById('contatoForm');
const tabela = document.getElementById('tabelaContatos').querySelector('tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // evita recarregar a página

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if(nome && telefone) {
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
        tabela.appendChild(linha);

        // Limpa os campos
        form.reset();
    } else {
        alert('Preencha todos os campos!');
    }
});
