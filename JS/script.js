// script.js
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    // Altera o ícone de tema (🌙 para ☀️ e vice-versa)
    const icon = document.getElementById("theme-toggle");
    icon.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

// Função para abrir o modal
function showModal(character) {
    const modal = document.getElementById("characterModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    
    if (character === 'seiya') {
        modalTitle.textContent = "Seiya de Pégaso";
        modalDescription.textContent = "O cavaleiro de Pégaso, corajoso e leal, sempre em busca de proteger Atena.";
    } else if (character === 'hyoga') {
        modalTitle.textContent = "Hyoga de Cisne";
        modalDescription.textContent = "Com poderes de gelo, ele enfrenta desafios com determinação e força interior.";
    } else if (character === 'shiryu') {
        modalTitle.textContent = "Shiryu de Dragão";
        modalDescription.textContent = "Com um coração puro e a força do dragão, Shiryu é um dos cavaleiros mais poderosos.";
    }

    modal.classList.add("show");
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("characterModal");
    modal.classList.remove("show");
}
