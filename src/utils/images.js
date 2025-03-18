export const getImageUrl = (name) => {
    return new URL(
    //   `../../assets/images/sidebar/${name.toLowerCase()}.png`,
      `../assets/images/${name.toLowerCase()}`,
      import.meta.url
    ).href;
};