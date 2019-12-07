export interface ServiceNavigatorProps {
  categorys: Category[];
}
export interface Category {
  name: string;
  uri: string;
  isOpen?: boolean;
}
