import { createContext } from "react";

export type IItem = {
  id: number;
  name: string;
  quantity: number;
  description: string;
};
export const DataContext = createContext<{
  data: IItem[];
  onAdd: (value: IItem) => void;
  onRemove: (id: number) => void;
}>({
  data: [],
  onAdd: console.info,
  onRemove: console.info,
});
