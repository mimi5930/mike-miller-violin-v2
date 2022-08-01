import { configureStore } from '@reduxjs/toolkit';
import eventsSlice from '../pages/Events/eventsSlice';

// initialize redux settings
export default configureStore({ reducer: { events: eventsSlice } });
