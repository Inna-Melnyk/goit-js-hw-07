import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryListEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
  )
  .join("");

galleryListEl.insertAdjacentHTML("beforeend", markup);

galleryListEl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

}
