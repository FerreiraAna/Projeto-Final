document.addEventListener('DOMContentLoaded', function () {
    // Adicionar funcionalidade ao botão de alternância do modo escuro
    const toggleDarkModeButton = document.querySelector('.toggle-dark-mode');
    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Adicionar lógica para persistir o estado do modo escuro
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Altere 'index.html' para o caminho correto
    });

    // Verificar se o modo escuro foi ativado anteriormente
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
});

/*----------------------------------------------agenda--------------------------------------------*/
function adicionarCompromisso() {
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    let hora = document.getElementById('hora').value;

    if (nome.trim() === '' || data.trim() === '' || hora.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const dataValida = validarData(data);
    const horaValida = validarHora(hora);

    if (!dataValida || !horaValida) {
        alert('Por favor, insira uma data e hora válidas.');
        return;
    }

    const agenda = document.getElementById('agenda');
    const evento = document.createElement('div');
    evento.classList.add('evento');

    const nomeCompromisso = document.createElement('h3');
    nomeCompromisso.textContent = nome;

    const detalhes = document.createElement('p');
    // Formatar a data para "dia-mês-ano"
    const partesData = data.split('-');
    const dataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;
    detalhes.textContent = `Data: ${dataFormatada}, Hora: ${hora}`;

    evento.appendChild(nomeCompromisso);
    evento.appendChild(detalhes);
    agenda.appendChild(evento);

    // Limpar campos após adicionar o compromisso
    document.getElementById('nome').value = '';
    document.getElementById('data').value = '';
    document.getElementById('hora').value = '';
}

document.getElementById('data').addEventListener('input', function () {
    // Remover qualquer caractere que não seja dígito ou hífen
    let cleanedValue = this.value.replace(/[^\d-]/g, '');

    // Dividir a string em partes: ano, mês e dia
    let parts = cleanedValue.split('-');

    // Limitar o ano a 4 dígitos
    if (parts[0] && parts[0].length > 4) {
        parts[0] = parts[0].slice(0, 4);
    }

    // Limitar o mês a 2 dígitos
    if (parts[1] && parts[1].length > 2) {
        parts[1] = parts[1].slice(0, 2);
    }

    // Limitar o dia a 2 dígitos
    if (parts[2] && parts[2].length > 2) {
        parts[2] = parts[2].slice(0, 2);
    }

    // Montar a string da data formatada
    let formattedDate = parts.join('-');

    // Definir o valor formatado de volta ao campo de entrada
    this.value = formattedDate;
});

document.getElementById('hora').addEventListener('input', function () {
    // Remover qualquer caractere que não seja dígito ou dois pontos
    let cleanedValue = this.value.replace(/[^\d:]/g, '');

    // Dividir a string em partes: horas e minutos
    let parts = cleanedValue.split(':');

    // Limitar as horas a 23
    if (parts[0] && parseInt(parts[0]) > 23) {
        parts[0] = '23';
    }

    // Limitar os minutos a 59
    if (parts[1] && parseInt(parts[1]) > 59) {
        parts[1] = '59';
    }

    // Montar a string da hora formatada
    let formattedTime = parts.join(':');

    // Definir o valor formatado de volta ao campo de entrada
    this.value = formattedTime;
});

function validarData(data) {
    const regexData = /^\d{4}-\d{2}-\d{2}$/;
    return regexData.test(data);
}

function validarHora(hora) {
    const regexHora = /^\d{2}:\d{2}$/;
    return regexHora.test(hora);
}

/*-----------------------------------------------login----------------------------------------------*/
const signinLink = document.getElementById('signin-link');
const signupLink = document.getElementById('signup-link');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

// Adiciona os manipuladores de evento para os links
signinLink.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    // Exibe o formulário de Sign In, esconde o de Sign Up
    signinForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupLink.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    // Exibe o formulário de Sign Up, esconde o de Sign In
    signinForm.style.display = 'none';
    signupForm.style.display = 'block';
});

/*-------------------------------------------------mentor---------------------------------------------*/
function centerMentor(element) {
    const activeCards = document.querySelectorAll('.mini-card.active');
    activeCards.forEach(card => {
        card.classList.remove('active');
    });
    element.querySelector('.mini-card').classList.add('active');
}
