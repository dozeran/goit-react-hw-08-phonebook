import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectisLoading = state => state.contacts.isLoading;
export const selectError = state => state.Error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contact, filter) => {
    return contact.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
