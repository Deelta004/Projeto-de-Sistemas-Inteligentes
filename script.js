document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const senha = document.getElementById('login-password').value;

  if (email && senha) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
  } else {
    alert("Preencha todos os campos.");
  }
});

document.getElementById('budget-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const renda = parseFloat(document.getElementById('renda').value);
  const despesas = parseFloat(document.getElementById('despesas').value);

  if (!isNaN(renda) && !isNaN(despesas)) {
    const sobra = renda - despesas;
    document.getElementById('resultado-calculo').innerText =
      `Você pode economizar R$ ${sobra.toFixed(2)} por mês.`;
  }
});

document.getElementById('abrir-chat').addEventListener('click', () => {
  const chat = document.getElementById('chatbox');
  chat.style.display = chat.style.display === 'none' ? 'block' : 'none';
});

function enviarMensagem() {
  const entrada = document.getElementById('entrada');
  const mensagem = entrada.value.trim();
  if (!mensagem) return;

  const mensagens = document.getElementById('mensagens');

  const userMsg = document.createElement('div');
  userMsg.textContent = `Você: ${mensagem}`;
  mensagens.appendChild(userMsg);

  entrada.value = '';

  const botMsg = document.createElement('div');
  botMsg.textContent = `IA: Analisando...`;
  mensagens.appendChild(botMsg);

  setTimeout(() => {
    botMsg.textContent = `IA: Uma dica é investir parte do seu saldo mensal em renda fixa de baixo risco.`;
  }, 1000);
}
