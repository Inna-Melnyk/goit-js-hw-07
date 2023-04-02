import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
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
 
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt="${evt.target.alt}"/>`
  );

  instance.show(() => {
    window.addEventListener("keydown", onKey);

    function onKey(evt) {
      if (evt.code === "Escape") {
          instance.close();
      }
    }
  });
}
