
document.getElementById('modalImage').src = imgSrc;
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('imageModal').style.display = 'flex';


function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

document.getElementById('closeButton').onclick = closeModal;