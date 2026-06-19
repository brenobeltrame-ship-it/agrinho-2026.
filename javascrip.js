document.addEventListener('DOMContentLoaded', () => {
    
    // --- INTERAÇÃO 1: MODAL DOS CARDS DE SOLUÇÕES ---
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('techModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const closeModal = document.querySelector('.close-modal');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            const details = card.getAttribute('data-tech');
            
            modalTitle.innerText = title;
            modalText.innerText = details;
            modal.style.display = 'flex';
        });
    });

    // Fechar o modal ao clicar no 'X'
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar o modal ao clicar fora da caixa branca
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // --- INTERAÇÃO 2: VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
    const form = document.getElementById('agroForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value;

        // Ativa a mensagem de sucesso interativa
        feedback.innerText = `Obrigado pelo contato, ${nome}! Nossa equipe técnica retornará em breve.`;
        feedback.classList.remove('hidden');
        feedback.classList.add('success');

        // Limpa os campos do formulário
        form.reset();

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            feedback.classList.add('hidden');
            feedback.classList.remove('success');
        }, 5000);
    });
});
