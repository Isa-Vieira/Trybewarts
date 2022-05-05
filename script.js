const botao1 = document.querySelector('.botao-entrar');

function clicbotao() {
  const botao2 = document.querySelector('.email');
  const botao3 = document.querySelector('.senha');
  console.log(botao2.value);
  if (botao2.value === 'tryber@teste.com' && botao3.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao1.addEventListener('click', clicbotao);

clicbotao();
