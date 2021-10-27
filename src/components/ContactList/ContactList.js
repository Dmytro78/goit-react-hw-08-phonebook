import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getContacts,
  removeContact,
} from "../../redux/contacts/contactsOperations";
import {
  getContactsFromState,
  getFilterFromState,
} from "../../redux/contacts/contactsSelectors";
import {ListItem, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';



export default function ContactList() {
  const contacts = useSelector(getContactsFromState);
  const filter = useSelector(getFilterFromState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getVisibleContacts();

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme} >
    <Container component="main" maxWidth="xs" sx={{ bgcolor: 'success.light' }}>
        <Box theme={theme} component="form" >
        <Typography variant="h6" component="div" sx={{ color: 'inherit' }}>
        contacts:
        </Typography>
        <List sx={{ bgcolor: 'success.light' }}>
          {visibleContacts &&
            visibleContacts.map(({ name, number, id }) => (
              <ListItem
                key={id}                
                
                secondaryAction={
                  <IconButton type="button"
                    onClick={() => dispatch(removeContact(id))}>
                    <DeleteForeverRoundedIcon />
                  </IconButton>
                }               
              >
              <span variant="h5">{name}:</span>
              <span variant="h5">{number}</span>
              </ListItem> 
            ))}
        </List>
      </Box>
      </Container>
    </ThemeProvider>
  );
}