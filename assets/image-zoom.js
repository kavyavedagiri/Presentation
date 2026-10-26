(() => {
  const images = Array.from(document.querySelectorAll('.slide img'));
  if (!images.length || !('HTMLDialogElement' in window)) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'image-zoom';
  dialog.setAttribute('aria-label', 'Image preview');
  dialog.innerHTML = '<button class="image-zoom-close" type="button" aria-label="Close image preview">×</button><img alt=""><p></p>';
  document.body.append(dialog);

  const closeButton = dialog.querySelector('.image-zoom-close');
  const preview = dialog.querySelector('img');
  const caption = dialog.querySelector('p');

  function openImage(image) {
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt || 'Presentation image';
    caption.textContent = image.alt || '';
    dialog.showModal();
  }

  for (const image of images) {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Zoom image: ${image.alt || 'presentation image'}`);
    image.addEventListener('click', () => openImage(image));
    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openImage(image);
      }
    });
  }

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
})();
