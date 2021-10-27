import { useSelector, useDispatch } from "react-redux";

import { filter } from "../../redux/filter/filter-actions";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material"
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function Filter() {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="xs" sx={{ bgcolor: 'success.light' }}>
    <Box theme={theme} component="form" >
      <Typography variant="h6" component="div" sx={{ color: 'inherit' }}>
        contact search
      </Typography>
      <TextField
        type="text"
        required
        fullWidth
        id="Name"
        label="Enter some letters to search"
        margin="normal"
        name="name"
        autoComplete="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        
        onChange={(e) => dispatch(filter(e.currentTarget.value))}
        value={value}
      />
      </Box>
    </Container>
  );
}
