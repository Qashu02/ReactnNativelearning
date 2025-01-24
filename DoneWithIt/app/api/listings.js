import client from './client';

const endpoint = 'listings';

const addListings = (listings) => {
  const data = new FormData();
  data.append('title', listings.title); // Corrected: listings.title
  data.append('price', listings.price); // Corrected: listings.price
  // data.append('categoryId', listings.category.value); // Corrected: listings.category.value
  data.append('description', listings.description); // Corrected: listings.description

  // Append images
  listings.images.forEach((image, index) => {
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    });
  });

  if (listings.location) data.append('location', JSON.stringify(listings.location));

  return client.post(endpoint, data);
};

export default {
  addListings,
};
