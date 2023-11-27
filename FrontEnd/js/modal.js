const modal = document.getElementById("myModal");
const btn = document.getElementById("modalBtn");
const closeModalBtns = document.getElementsByClassName("close");
const pages = document.getElementsByClassName("modal-content");

btn.addEventListener("click", openModal);

for (let i = 0; i < closeModalBtns.length; i++) {
    closeModalBtns[i].addEventListener("click", closeModal);
}

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        closeModal();
    }
});

function openModal() {
    console.log("Opening modal");
    modal.style.display = 'block';
    pages[0].style.display = 'block';
    document.getElementById('nextPageLink').addEventListener('click', nextPage);
    document.getElementById('prevPageLink').addEventListener('click', prevPage);
}

function closeModal() {
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
