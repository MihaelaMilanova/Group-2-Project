import { colors } from "@mui/material";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";

export const HomePage = () => {
    return (
    <Box sx={{
        display:"flex",
        flexDirection: {xs:"column", md:"row"},
        alignItems:"center",
        justifyContent:"space-between",
        px:20,
        //py:5,
        backgroundColor:"#fdeaf1",
        minHeight:"60vh",
    }}>
        <Box sx={{flex:1, md:0}}>
            <Typography variant="h3" sx={{ color:"#f48fb1", fontFamily:"Felipa",fontWeight:"bold"}}>Feasty<br />Beverages</Typography>
            <Typography variant="h6" sx={{maxWidth:400}}>"More than just a drink - it's a moment of refreshment, a burst of flavor, and a reason to smile"</Typography>
        </Box>
        <Box>
            <img src="./img1.png" alt = "Product"/>
        </Box>

    </Box>
)};
