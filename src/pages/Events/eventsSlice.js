import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
  name: 'events',
  initialState: { isLoading: true, value: [] },
  reducers: {
    completeLoading: state => {
      state.isLoading = false;
    },
    setEvents: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setEvents, completeLoading } = eventsSlice.actions;

export default eventsSlice.reducer;
