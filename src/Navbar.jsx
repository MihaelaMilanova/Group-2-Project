
import { AppBar,
         Toolbar,
         Typography,
         Link,
         styled,
         InputBase,
         alpha,
         Button, 
         Box,
         IconButton,
         Container,
         Drawer,
         List,
         GlobalStyles,
 } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import { useState } from 'react';
//import { useState } from 'react';

<GlobalStyles styles={{ body: {margin:0, padding:0, overflowX: "hidden"}, html:{overflowX:"hidden"},}}/>
const Search = styled("div")
(({theme}) => ({
  position:"relative",
  borderRadius:30,
  marginLeft:theme.spacing(2),
  marginRight:theme.spacing(2),
  minWidth: 50,
  //maxWidth: 400,
  //width: "100%",
  maxwidth: {xs:"100%", sm:"300px", md:"400px", lg:"500px"},
  flexGrow:1,
  //maxWidth:300,
  backgroundColor:"transparent",
  border:"2px solid rgb(174, 169, 169)",
  height: 40,
}));

const SearchIconWrapper =
styled("div")(({theme}) => ({
  padding:theme.spacing(0,2),
  height:"100%",
  position:"absolute",
  pointerEvents:"none",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
}));

const StyledInputBase = 
styled(InputBase)(({theme}) => ({
  //color:"inherit",
  width:"100%",
  padding: theme.spacing(1,1,1,5),
  borderRadius: 30,
  
}));

const NavButton = 
styled(Button)({
  backgroundColor:"#f7b9d8",
  color:"#fff",
  marginLeft:30,
  borderRadius:50,
  minWidth: "110px",
  maxWidth: "140px",
  flex:1,
  overflow:"hidden",
  whiteSpace:"nowrap",
  height:40,
  fontWeight:"bold",
  textTransform:"none", "&:hover":{
    backgroundColor:"#f9cce3",
  },
});

const navItems = [
  {label: "HOME", path:"/"},
  {label: "PRODUCTS", path:"/products"},
  {label: "ABOUT US", path:"about"},
  {label: "BLOG", path:"/blog"},
];

export const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
  <AppBar position='static' color="transparent" elevation={0} sx={{width:"100%"}}>
    <Toolbar sx={{px:{xs:2,md:6},justifyContent:"space-between", flexWrap:"nowrap", display:"flex", width:"100%", maxWidth:"100vw",boxSizing:"border-box"}}>
      
        <Typography component={Link} to={"/"} variant="h4" sx={{fontFamily: "Montserrat", color:"#f48fb1", fontWeight:"bold", textDecoration:"none"}}>
        Feasty
        </Typography>
      

      {/*Search*/}

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase />
      </Search>

      {/*Desktop navbar*/}
      <Box sx={{display: {xs:"none",sm:"none", md:"none", lg:"flex"}}}/*sx={{display:"flex", alignItems:"center", flexGrow:1, justifyContent:"center", flexWrap:"wrap"}}*/>
        {navItems.map((item) => (
          <NavButton key={item.label}
          component ={Link}
          to={item.Path}>
            {item.label}
          </NavButton>
        ))}
      </Box>

      {/*Mobile Menu Button*/}
      <Box sx={{display: {xs:"flex",sm:"flex", md:"flex", lg:"none"}}}>
        {" "}
        <Button onClick={() => setMenuOpen((prev) => !prev)}>
          <svg
                className="w-6 h-6"
                fill="none"
                stroke="pink"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
        </Button>
      </Box>

      {/*Mobile navbar*/}
        {menuOpen && (
        <Box sx={{width:250}} role="presentation" onClick={() => setOpen(false)}>
            {navItems.map((item) => (
          <NavButton key={item.label}
          component ={Link}
          to={item.Path}>
            {item.label}
          </NavButton>
        ))}
        </Box>
        )}
        
      

        {/*Icons*/}
        <Box sx={{display:"flex", gap:1}}>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>

          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
    </Toolbar>
  </AppBar>
  );
};

