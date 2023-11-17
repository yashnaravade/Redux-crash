import { ConfigureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const store = ConfigureStore({
    reducer: rootReducer
    });
    

    
