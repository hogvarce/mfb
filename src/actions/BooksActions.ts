import {Dispatch} from "redux";
import {actionTypes} from 'constants/actionTypes';

export interface Action { type: string; payload: Object }

const books = [
    { id: 1, title: 'book1' },
    { id: 2, title: 'book2' },
    { id: 3, title: 'book3' },
];

export const getBooks = () => {
    return (dispatch: Dispatch<Action>) => {
        return dispatch({
            type: actionTypes.FETCH_BOOKS_SUCCESS,
            payload: books,
        });
    };
};
