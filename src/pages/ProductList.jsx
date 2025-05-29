import { Grid } from '@mui/material';
import ProductCard from "../components/ProductCard"


const products = [
  { name: "Watermelon", price: "3.00 лв", image: "/images/watermelon.png", amount: "330ml" },
  { name: "Strawberry", price: "3.00 лв", image: "/images/strawberry.png", amount: "330ml" },
  { name: "Melon", price: "3.00 лв", image: "/images/MELON.png", amount: "330ml" },
  { name: "Watermelon", price: "3.00 лв", image: "/images/watermelon.png", amount: "330ml" },
  { name: "Strawberry", price: "3.00 лв", image: "/images/strawberry.png", amount: "330ml" },
  { name: "Melon", price: "3.00 лв", image: "/images/MELON.png", amount: "330ml" },
  { name: "Watermelon", price: "3.00 лв", image: "/images/watermelon.png", amount: "330ml" },
  { name: "Strawberry", price: "3.00 лв", image: "/images/strawberry.png", amount: "330ml" },
  { name: "Melon", price: "3.00 лв", image: "/images/MELON.png", amount: "330ml" },
];

const ProductList = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {products.map((p, i) => {
        return (
          <ProductCard key={p.id} product={p}/>        
        )
       
})}
    </Grid>
  );
};

export default ProductList;
