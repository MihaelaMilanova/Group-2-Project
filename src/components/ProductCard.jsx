import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";


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

export default function ProductCard({product}) {
  return (
          <Grid item xs={12} sm={4} md={4}>
            <Card 
              sx={{
                borderRadius: 4,
                textAlign: "center",
                padding: 2,
                boxShadow: 3,
                backgroundColor: "#fff0f6",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ width: 100, height: 150, objectFit: "contain", margin: "0 auto" }}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  {product.amount}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  {product.price}
                </Typography>
                <Button variant="contained" color="secondary" sx={{ marginRight: 1 }} >
                  Добави в количката
                </Button>
                <Button variant="contained" color="secondary" >
                  Любими
                </Button>
              </CardContent>
            </Card>
          </Grid>
  );
}


