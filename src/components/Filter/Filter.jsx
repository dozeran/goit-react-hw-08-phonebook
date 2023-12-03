import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Typography } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <Typography component="h1" variant="h5">
        Find contact by name
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Enter name for search"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;
