const imageTypeFilter = (images: File[]): File[] => {
  return images.filter((image: File) => {
    return ['jpg', 'png', 'jpeg', 'tiff'].find(
      extension =>
        extension ===
        image.name
          .split('.')
          .pop()
          ?.toLowerCase()
    );
  });
};
export default imageTypeFilter;
