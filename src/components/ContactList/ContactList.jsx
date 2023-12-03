import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import List from '@mui/material/List';
import ContactPhone from '@mui/icons-material/Inbox';
import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem disablePadding key={id}>
          <ListItemButton className={css.contactItem}>
            <ListItemIcon>
              <ContactPhone />
            </ListItemIcon>
            <b>{name}</b>: {number}{' '}
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              startIcon={<DeleteIcon />}
              variant="outlined"
              className={css.button}
            >
              Delete
            </Button>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
