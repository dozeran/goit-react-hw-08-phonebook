import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contactsInStore = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const searchContacts = contactsInStore.find(
      contactInStore =>
        contactInStore.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (searchContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 9,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Contact name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="number"
            label="Contact Phone"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
