import * as React from "react";
import { Grid, Box, Typography, Link, TextField, Button} from "@mui/material";

export const Footer = () => {
  return (
    <Box widthsx={{ width:"100%", backgroundColor:"transparent", p:4, mt:5}}>
      <Grid container spacing={4} md={4} /*display="flex"*/ justifyContent="space-between" alignItems="flex-start" sx={{marginBottom:10, flexWrap:"wrap"}}>
        <Grid item md={1}>
          <Typography  variant="h2" sx={{marginLeft:20, marginTop:5, fontFamily: "Montserrat", color:"#f48fb1", fontWeight:"bold", textDecoration:"none"}}>
             Feasty
          </Typography>
        </Grid>

        <Grid item xs={12} md="auto" sx={{mx:{xs:"auto", md:15}}} /*sx={{marginLeft:30}}*/>
            <Typography sx={{marginTop:"25px", color:"#f48fb1"}}>
              EMAIL
            </Typography>
            <Box sx={{display:"flex"}}>
              <TextField placeholder="Enter your email" fullWidth sx={{"& .MuiOutlinedInput-root":{borderRadius:"30px"},  position:"relative",
              maxwidth: {xs:"100%", sm:"300px", md:"400px", lg:"500px"}, flexGrow:1, minWidth: 50}}/>
              <Button sx={{backgroundColor:"#f7b9d8", color:"#fff",ml:2, borderRadius:50, 
                minWidth: "110px", maxWidth: "140px", flex:1, overflow:"hidden",whiteSpace:"nowrap",height:40, fontWeight:"bold", 
                textTransform:"none", "&:hover":{backgroundColor:"#f9cce3",}}}>Sign Up</Button>
              </Box>
        </Grid>
      </Grid>


      <Grid container /*spacing={20}*/ justifyContent="center" display="flex" rowSpacing={2} columnSpacing={{ xs: 4, sm: 10, md: 20 }}>

        <Grid>
          <Typography variant="h5" sx={{fontFamily: "Montserrat", color:"#f48fb1", fontWeight:"bold", textDecoration:"none"}}>Products</Typography>
          {["Lemonades", "Fresh", "Juices", "Bubble Tea", "Milkshakes", "Smoothies"]
          .map((item) => (
            <Link href="#" key={item} display="block" sx={{fontFamily: "Montserrat", color:"#f48fb1", textDecoration:"none"}}>{item}</Link>
          ))}
        </Grid>

        <Grid>
          <Typography variant="h5" sx={{fontFamily: "Montserrat", color:"#f48fb1", fontWeight:"bold", textDecoration:"none"}}>About Us</Typography>
          {["Our Story", "Meet the Team", "Blog", "Reviews"]
          .map((item) => (
            <Link href="#" key={item} display="block" sx={{fontFamily: "Montserrat", color:"#f48fb1", textDecoration:"none"}}>{item}</Link>
          ))}
        </Grid>

        <Grid>
          <Typography variant="h5" sx={{fontFamily: "Montserrat", color:"#f48fb1", fontWeight:"bold", textDecoration:"none"}}>Shop</Typography>
          {["Order Now", "Find a Store", "Delivery Info"]
          .map((item) => (
            <Link href="#" key={item} display="block" sx={{fontFamily: "Montserrat", color:"#f48fb1", textDecoration:"none"}}>{item}</Link>
          ))}
        </Grid>

        <Grid>
          <Typography variant="h5" sx={{fontFamily: "Montserrat", color:"#f48fb1", fontWeight:"bold", textDecoration:"none"}}>Customer Service</Typography>
          {["Shipping & Delivery", "FAQs", "Contact Us"]
          .map((item) => (
            <Link href="#" key={item} display="block" sx={{fontFamily: "Montserrat", color:"#f48fb1", textDecoration:"none"}}>{item}</Link>
          ))}
        </Grid>
      </Grid>


    </Box>
  );
}




