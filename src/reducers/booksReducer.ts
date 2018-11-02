import { BookEntity } from 'models/BookEntity';
import { actionTypes } from 'constants/actionTypes';

export const booksReducer = (state: BookEntity[] = [], action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_SUCCESS:
            return action.payload;
    }
    return state;
};
