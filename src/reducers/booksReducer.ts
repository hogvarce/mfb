import { BookEntity } from 'models/BookEntity';
import { actionTypes } from 'constants/actionTypes';
import CacheManager from 'cache';

const cache = new CacheManager();
let newState;

export const booksReducer = (state: BookEntity[] = [], action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_SUCCESS:
            newState = action.payload;
            cache.writeData('state', newState);
            return newState;
        case actionTypes.ADD_BOOK:
            newState = [...state, action.payload];
            cache.writeData('state', newState);
            return newState;
        case actionTypes.REMOVE_BOOK:
            const id = action.payload;
            newState = state.filter(book => book.id !== id);
            cache.writeData('state', newState);
            return newState;
        case actionTypes.EDIT_BOOK:
            newState = state.map(book => book.id === action.payload.id ? action.payload : book);
            cache.writeData('state', newState);
            return newState;

    }
    return state;
};
