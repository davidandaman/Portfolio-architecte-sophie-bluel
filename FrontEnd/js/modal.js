const modal = document.getElementById("myModal");
const btn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];
const pages = document.getElementsByClassName("modal-content");

btn.onclick = function () {
  openModal();
}

span.onclick = function () {
  closeModal();
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}

function openModal() {
  console.log("Opening modal");
  modal.style.display = 'block';
  pages[0].style.display = 'block';
  document.getElementById('nextPageLink').addEventListener('click', nextPage);
  document.getElementById('prevPageLink').addEventListener('click', prevPage);
}

// Déclaration du closeModal en tant que fonction globale
window.closeModal = function () {
  console.log("Closing modal");
  modal.style.display = 'none';
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  document.getElementById('nextPageLink').removeEventListener('click', nextPage);
  document.getElementById('prevPageLink').removeEventListener('click', prevPage);
}

function nextPage() {
  console.log("Going to next page");
  pages[0].style.display = 'none';
  pages[1].style.display = 'block';
}

function prevPage() {
  console.log("Going back to the previous page");
  pages[1].style.display = 'none';
  pages[0].style.display = 'block';
}

//openModal();
