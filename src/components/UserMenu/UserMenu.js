import Typography from '@mui/material/Typography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector, useDispatch } from "react-redux";
import { getUsername } from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";

export default function UserMenu() {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
  <>
            <AccountBoxIcon sx={{ ml: 3, fontSize: 30 }} />
            <Typography  sx={{ ml: 2 }}component="div" variant="h6">
             Welcome, {username}
            </Typography>
            <ExitToAppIcon sx={{ ml: 2, fontSize: 30 }} onClick={() => dispatch(authOperations.logOut())} />
      </>
  );
}
