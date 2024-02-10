import iziToast from 'izitoast';

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

iziToast.show({
  title: 'Error',
  message: 'There are no images matching your search query. Please try again!',
  titleSize: '16px',
  titleLineHeight: '150%',
  messageSize: '16px',
  messageLineHeight: '150%',
  backgroundColor: '#ef4040',
  position: 'bottomRight',
});

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
