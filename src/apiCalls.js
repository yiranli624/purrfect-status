export const getStatusPicture = () => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Sorry we are having difficulty loading this page, please try again later!"
        );
      }
    });
};