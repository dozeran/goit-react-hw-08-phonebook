import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectisLoading } from 'redux/contacts/selectors';
import Filter from 'components/Filter/Filter';
import { Skeleton } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <div>
        {isLoading && (
          <Skeleton
            animation="wave"
            variant="rounded"
            width={450}
            height={35}
          />
        )}
      </div>
      <ContactList />
    </>
  );
}
