import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const item = galleryItems.map( ({preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
}).join("");

gallery.insertAdjacentHTML("beforeend", item);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData:"alt",
  captionDelay: 250,
});