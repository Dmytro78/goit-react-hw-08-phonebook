import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setName] = useState("");
  const [password, setNumber] = useState("");

  const handelChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setName(value);
        break;
      case "password":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setNumber("");
    setName("");
  };



  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" sx={{bgcolor: 'success.light' }}>
             <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'success.dark' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handelChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handelChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="success" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success" 
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
