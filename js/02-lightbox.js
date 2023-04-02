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

const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});




// gallery.on("error", (e) => console.log(e));