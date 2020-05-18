export interface Contact {
  imageUrl?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export type ToDoItemState = {
  id: number;
  taskName: string;
  selected: boolean;
};
