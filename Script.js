function toggleLargeImage(imageId) {
  var image = document.getElementById(imageId);
  // You can add any image enlargement or handling here if needed
}

document.getElementById('modalImage').src = imgSrc;
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('imageModal').style.display = 'flex';


function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

document.getElementById('closeButton').onclick = closeModal;

const toggleButton = document.getElementById("toggle-dark-mode");
const isDarkMode = localStorage.getItem("dark-mode") === "true";

if (isDarkMode) document.body.classList.add("dark-mode");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});