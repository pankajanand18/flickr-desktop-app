export type LocalImageProps = {
  id?: number | 0;
  description?: string;
  tags?: string;
  name: string;
  path: string;
};

export type LocalImageFile = File | LocalImageProps;
