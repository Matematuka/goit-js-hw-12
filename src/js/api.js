import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/';
const myApiKey = '42174217-6daf07c41ac875e98ae2151fa';

export async function getImage(imageName, page) {
  const response = await axios.get('api/', {
    params: {
      key: myApiKey,
      per_page: 15,
      page,
      q: imageName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
