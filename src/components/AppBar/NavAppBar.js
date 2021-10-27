import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function NavAppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
    <Box>
      <AppBar position="fixed"  sx={{ bgcolor: 'success.light' }}>
        <Toolbar>
        <Button href="/" color="inherit" variant="h6" sx={{ mr:"auto" }}>Phonebook</Button>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}     
        </Toolbar>
     </AppBar>
    </Box>
   </>
  );
}
