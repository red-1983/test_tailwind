export interface CardPropsData {
  id: string;
  period: string;
  price: number | null;
  full_price: number | null;
  is_best?: boolean;
  text: string;
}
