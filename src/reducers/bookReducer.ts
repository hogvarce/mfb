import { BookEntity } from 'models/BookEntity';
import { actionTypes } from 'constants/actionTypes';

export const bookReducer = (state: BookEntity = {}, action: any) => {
    switch (action.type) {
        case actionTypes.GET_BOOK:
            return action.payload;
    }
    return state;
};
