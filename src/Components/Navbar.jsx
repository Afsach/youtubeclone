import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "./utils/constants";

const Navbar = () => (

    <Stack
        direction="row" 
        alignitem="center" 
        p={2} 
        sx={{ postion: 'sticky', top: 0, background: '#000', justifyContent: 'space-between' }} >

        <Link to="/" style={{display : 'flex', alignItem : 'center'}} >
            <img src={logo} alt="logo" height={45} ></img>       
        </Link>
        <SearchBar/>
    </Stack>

);

export default Navbar