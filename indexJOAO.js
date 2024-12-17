// Alternar barra lateral
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('expanded'); // Adiciona ou remove a classe 'expanded' para expandir ou recolher

  // Fechar todas as listas se a barra lateral for recolhida
  const isExpanded = sidebar.classList.contains('expanded');
  if (!isExpanded) {
    closeAllLists(); // Fecha todas as listas se a barra lateral estiver recolhida
  }

  // Ajustar o delay das transições dos ícones
  const iconLabels = document.querySelectorAll('.icon-label');
  iconLabels.forEach((label, index) => {
    label.style.transitionDelay = isExpanded
      ? `${index * 0.1}s` // Atraso de transição ao expandir
      : `${(iconLabels.length - index) * 0.1}s`; // Atraso de transição ao recolher
  });
}


// Fechar todas as listas
function closeAllLists() {
  const lists = document.querySelectorAll('.list');
  lists.forEach(list => list.classList.remove('show')); // Remove a classe 'show' de todas as listas
}


// Alternar visibilidade das listas
function toggleList(type) {
  const currentList = document.getElementById(`${type}-list`);
  const otherList = document.getElementById(type === 'nativas' ? 'invasoras-list' : 'nativas-list');

  if (!currentList.classList.contains('show')) {
    otherList.classList.remove('show'); // Fecha a outra lista
    currentList.classList.add('show'); // Abre a lista atual
  } else {
    currentList.classList.remove('show'); // Fecha a lista atual se já estiver aberta
  }
}


// Fechar barra lateral e listas ao clicar fora dela
document.addEventListener('click', event => {
  const sidebar = document.querySelector('.sidebar');
  const toggleButton = document.querySelector('.toggle-btn');

  // Verifica se o clique foi fora da barra lateral e do botão de toggle
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.remove('expanded'); // Fecha a barra lateral
    closeAllLists(); // Fecha todas as listas
  }
});


// Atualizar título do cabeçalho
function updateHeaderTitle(listType) {
  const headerTitle = document.querySelector('.main-content h1');
  headerTitle.textContent = listType === 'nativas'
    ? 'Espécies Nativas'
    : listType === 'invasoras'
      ? 'Espécies Invasoras'
      : 'Bem-vindo à nossa página!';
}


// Tornar botões acessíveis com Enter
function addKeyboardAccessibility() {
  document.querySelectorAll('.icon, .list button').forEach(button => {
    button.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        button.click();
      }
    });
  });
}


// Eventos principais
document.getElementById('nativas-btn').addEventListener('click', () => toggleList('nativas'));
document.getElementById('invasoras-btn').addEventListener('click', () => toggleList('invasoras'));
document.querySelectorAll('.list button').forEach(button => {
  button.addEventListener('click', () => {
    updateHeaderTitle(button.textContent);
    closeAllLists();
  });
});


// Botão de alternar a barra lateral
document.querySelector('.toggle-btn').addEventListener('click', (event) => {
  event.stopPropagation(); // Impede que o clique se propague e feche a barra lateral
  toggleSidebar(); // Chama a função para alternar a barra lateral
});


// Ativar acessibilidade
addKeyboardAccessibility();

// Seleciona o botão
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Mostrar ou esconder o botão de rolagem
window.onscroll = function() {
  const scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
  } else {
      scrollBtn.style.display = "none";
  }
};

// Função para rolar para o topo
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}


//Função de rolagem no cabeçalho
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


//direciona para paginas das plantas
document.getElementById('Araucaria').addEventListener('click', () => {
  window.location.href = 'Araucaria.html';
});
document.getElementById('Petunia').addEventListener('click', () => {
  window.location.href = 'Petunia.html';
});
document.getElementById('IrisDaPraia').addEventListener('click', () => {
  window.location.href = 'IrisDaPraia.html';
});
document.getElementById('JasmimBrasileiro').addEventListener('click', () => {
  window.location.href = 'JasmimBrasileiro.html';
});
document.getElementById('CostelaDeAdao').addEventListener('click', () => {
  window.location.href = 'CostelaDeAdao.html';
});
document.getElementById('LirioDaPaz').addEventListener('click', () => {
  window.location.href = 'LirioDaPaz.html';
});
document.getElementById('DracenaVermelha').addEventListener('click', () => {
  window.location.href = 'DracenaVermelha.html';
});
document.getElementById('FolhaDaFOrtuna').addEventListener('click', () => {
  window.location.href = 'FolhaDaFOrtuna.html';
});
document.getElementById('Pessegueiro').addEventListener('click', () => {
  window.location.href = 'Pessegueiro.html';
});
document.getElementById('CristaDeGalo').addEventListener('click', () => {
  window.location.href = 'CristaDeGalo.html';
});
document.getElementById('CancaoDaIndia').addEventListener('click', () => {
  window.location.href = 'CancaoDaIndia.html';
});
document.getElementById('FigueiraDeJardim').addEventListener('click', () => {
  window.location.href = 'FigueiraDeJardim.html';
});
document.getElementById('SamambaiaAmericana').addEventListener('click', () => {
  window.location.href = 'samambaia.html';
});
document.getElementById('Manjeircao').addEventListener('click', () => {
  window.location.href = 'Manjeircao.html';
});
document.getElementById('RaboDeBurro').addEventListener('click', () => {
  window.location.href = 'RaboDeBurro.html';
});
document.getElementById('PinheiroDeBuda').addEventListener('click', () => {
  window.location.href = 'PinheiroDeBuda.html';
});
document.getElementById('OrelhaDeElefante').addEventListener('click', () => {
  window.location.href = 'OrelhaDeElefante.html';
});
document.getElementById('SaguDeJardim').addEventListener('click', () => {
  window.location.href = 'SaguDeJardim.html';
});


