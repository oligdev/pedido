const form = document.getElementById('pedido-form');
    const adicionarBtn = document.getElementById('adicionar');
    const itensAdicionados = document.getElementById('itens-adicionados');
    const listaItens = [];

    adicionarBtn.addEventListener('click', () => {
      const item = document.getElementById('item').value;
      const quantidade = parseInt(document.getElementById('quantidade').value);
      if (!item || quantidade <= 0) return;

      listaItens.push({ item, quantidade });
      renderizarItens();
    });

    function renderizarItens() {
      itensAdicionados.innerHTML = '<strong>Itens adicionados:</strong><ul>' +
        listaItens.map(i => `<li>${i.quantidade}x ${i.item}</li>`).join('') +
        '</ul>';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const endereco = document.getElementById('endereco').value.trim();
      const obs = document.getElementById('obs').value.trim();

      if (!nome || !endereco || listaItens.length === 0) {
        alert("Por favor, preencha seu nome, endereço e adicione ao menos um item.");
        return;
      }

      let mensagem = `Olá! Meu nome é ${nome} e meu pedido é:\n\n`;
      listaItens.forEach(i => {
        mensagem += `- ${i.quantidade}x ${i.item}\n`;
      });
      mensagem += `\nEndereço: ${endereco}`;
      mensagem += `\nObservações: ${obs || "Nenhuma"}`;
      mensagem += `\n\nObrigado!`;
      mensagem += `\n\n#PEDIDO_SITE`;


      const telefone = '557981479945'; // Substituir pelo número do restaurante
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    });
