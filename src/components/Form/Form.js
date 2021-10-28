import { useState } from "react";
import { addContact } from "../../redux/contacts/contactsOperations";
import { getContactsFromState } from "../../redux/contacts/contactsSelectors";
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ContactPhoneRounded } from "@mui/icons-material";


export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContactsFromState);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setNumber("");
    setName("");
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" sx={{ bgcolor: 'success.light' }}>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'success.dark' }}>
            <ContactPhoneRounded/>
          </Avatar>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              type="text"
              required
              fullWidth
              id="Name"
              label="Name"
              name="name"
              autoComplete="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              autoFocus
              onChange={handleChange}
              value={name}
            />
            <TextField
              margin="number"
              required
              fullWidth
              name="number"
              label="Number"
              type="tel"
              id="number"
              autoComplete="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              onChange={handleChange}
              value={number}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Contact 
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
