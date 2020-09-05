import { LocalImageFile } from '../components/Interaces';

const imageTypeFilter = (images: LocalImageFile[]): LocalImageFile[] => {
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
