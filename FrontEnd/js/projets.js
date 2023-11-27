import {works, categories} from './export-projets-api.js';

const gallery = document.querySelector(".gallery");
const filter = document.querySelector(".button-filter");


export const displayGallery = (projet) => {
    document.querySelector(".gallery").innerHTML = "";
    for (let i in projet) {
        /** Création des balises */
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        const title = document.createElement("figcaption");

        image.setAttribute("src", projet[i].imageUrl);
        image.setAttribute("alt", projet[i].title);

        title.innerHTML = projet[i].title;

        figure.appendChild(image);
        figure.appendChild(title);
        gallery.appendChild(figure);
        }
    }

const displayFilters = (categorie) => {
    document.querySelector(".button-filter").innerHTML = '';
    const buttonAll = document.createElement("button");
    buttonAll.innerHTML = "Tous";
    filter.appendChild(buttonAll);

    for (let i in categorie) {
        const button = document.createElement("button");
        button.innerHTML = categorie[i].name;
        filter.appendChild(button);
    }
}

displayFilters(categories);
displayGallery(works);


const filterButtons = document.querySelectorAll(".button-filter button");

/** création de la classe CSS de "bouton_actif" au premier bouton */
filterButtons[0].setAttribute("class", "bouton_actif");

/** Boucle  clic utilisateur */
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        /** itération, la classe CSS "bouton_actif" est supprimée de chaque bouton.
        * pour désactiver tous les boutons avant d'activer celui qui a été cliqué */
        for (let i = 0; i < filterButtons.length; i++) {
            filterButtons[i].removeAttribute("class", "bouton_actif");
        }

        /** la classe CSS "bouton_actif" est ajoutée au bouton cliqué */
        filterButtons[i].setAttribute("class", "bouton_actif");

        /** une condition pour vérifier si  le premier bouton "Tous" a été cliqué la fonction displayGallery affiche le tableau works sans filtre */
        if (i === 0) {
          displayGallery(works);

        } else {

            /** Tableau ElementsFiltered est créé avec la méthode filter() du tableau works.
             * Seuls les éléments ayant une categoryId (clé de la works del’API) égale à l'index i du bouton cliqué ont inclus dans ce tableau)*/
            const ElementsFiltered = works.filter(projet => projet.categoryId == i);

            /** Affichage de la galerie avec les éléments filtrés en fonction de la categoryId du bouton cliqué */
            displayGallery(ElementsFiltered);
        }
    })
}
