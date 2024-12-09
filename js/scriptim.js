/*function openModal(src) {
    document.getElementById('expandedImage').src = src; // Cambia la fuente de la imagen ampliada
    var modal = new bootstrap.Modal(document.getElementById('imageModal')); // Inicializa el modal
    modal.show(); // Muestra el modal
}*/
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const expandedImage = document.getElementById('expandedImage');
    const modalTitle = document.getElementById('imageModalTitle');
    const modalDescription = document.getElementById('imageModalDescription');

    // Actualizar contenido del modal
    expandedImage.src = img.src;
    modalTitle.textContent = img.getAttribute('data-title');
    modalDescription.textContent = img.getAttribute('data-description');

    // Mostrar modal
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}
