import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  hideLoader,
  hideLoadMore,
  showLoader,
  showLoadMore,
} from './js/helpers';
import { getImage } from './js/api';
import { imageTemplate } from './js/markup';

const form = document.querySelector('.search-form');
const pictures = document.querySelector('.gallery');
const btnNext = document.querySelector('.btn');

let currentPage = 1;
let currentQuery = '';
let availablePages = 0;

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', searchImage);
btnNext.addEventListener('click', loadMore);

async function searchImage(evt) {
  evt.preventDefault();
  const image = evt.target.elements.image.value.trim();
  pictures.innerHTML = '';
  hideLoadMore();
  try {
    if (image === '') {
      iziToast.show({
        title: 'Error',
        message: 'Please enter a search term to begin your search.',
        titleSize: '16px',
        titleLineHeight: '150%',
        messageSize: '16px',
        messageLineHeight: '150%',
        backgroundColor: '#ef4040',
        position: 'bottomRight',
      });
      return;
    }
    showLoader();
    currentQuery = image;
    currentPage = 1;

    const data = await getImage(currentQuery, currentPage);

    if (data.totalHits > 0) {
      const markup = data.hits.map(imageTemplate).join('\n\n');
      pictures.insertAdjacentHTML('beforeend', markup);
      const element = pictures.firstElementChild.getBoundingClientRect();
      window.scrollBy({ top: element.height, behavior: 'smooth' });
      console.log(element.height);
      gallery.refresh();
      showLoadMore();
      form.reset();

      availablePages = Math.ceil(data.totalHits / 15);
    } else {
      pictures.innerHTML = '';
      iziToast.show({
        title: 'Error',
        message:
          'There are no images matching your search query. Please try again!',
        titleSize: '16px',
        titleLineHeight: '150%',
        messageSize: '16px',
        messageLineHeight: '150%',
        backgroundColor: '#ef4040',
        position: 'bottomRight',
      });
    }
  } catch (err) {
    iziToast.show({
      title: 'Error',
      message: err.message,
      titleSize: '16px',
      titleLineHeight: '150%',
      messageSize: '16px',
      messageLineHeight: '150%',
      backgroundColor: '#ef4040',
      position: 'bottomRight',
    });
  } finally {
    hideLoader();
  }
}

async function loadMore() {
  try {
    showLoader();
    currentPage += 1;
    const data = await getImage(currentQuery, currentPage);
    const markup = data.hits.map(imageTemplate).join('\n\n');
    pictures.insertAdjacentHTML('beforeend', markup);
    const element = pictures.firstElementChild.getBoundingClientRect();
    window.scrollBy({ top: element.height, behavior: 'smooth' });
    gallery.refresh();
    if (currentPage === availablePages) {
      iziToast.show({
        title: 'Error',
        message: "We're sorry, but you've reached the end of search results.",
        titleSize: '16px',
        titleLineHeight: '150%',
        messageSize: '16px',
        messageLineHeight: '150%',
        backgroundColor: '#ef4040',
        position: 'bottomRight',
      });
      hideLoadMore();
    }
  } catch (err) {
    iziToast.show({
      title: 'Error',
      message: err.message,
      titleSize: '16px',
      titleLineHeight: '150%',
      messageSize: '16px',
      messageLineHeight: '150%',
      backgroundColor: '#ef4040',
      position: 'bottomRight',
    });
  } finally {
    hideLoader();
  }
}
