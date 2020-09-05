export type LocalImageProps = {
  id?: number | 0;
  height?: number;
  width?: number;
  description?: string;
  tags?: string;
};

export type LocalImageDetails = {
  name: string;
  path: string;
};

export type LocalImage = LocalImageProps & LocalImageDetails;

export type LocalImageFile = File & LocalImageProps;
