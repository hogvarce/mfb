import CacheManager from 'cache';
import {actionTypes} from 'constants/actionTypes';
import { BookEntity } from 'models/BookEntity';

const cache = new CacheManager();

export const getBooks = () => {
    return async (dispatch: any) => {
        const books = await cache.readData('state') || [];
        return dispatch({
            type: actionTypes.FETCH_BOOKS_SUCCESS,
            payload: books,
        });
    };
};

export const getBook = (id: string) => {
    return async (dispatch: any) => {
        const books = await cache.readData('state') || [];
        const book = books.find(item => item.id === id) || {};
        return dispatch({
            type: actionTypes.GET_BOOK,
            payload: book,
        });
    };
};

export const addBook = (book: BookEntity) => {
    return (dispatch: any) => {
        dispatch({
            type: actionTypes.ADD_BOOK,
            payload: book,
        });
        return Promise.resolve();
    }
};

export const editBook = (book: BookEntity) => {
    return (dispatch: any) => {
        dispatch({
            type: actionTypes.EDIT_BOOK,
            payload: book,
        });
        return Promise.resolve();
    }
};

export const removeBook = (id: string) => {
    return {
        type: actionTypes.REMOVE_BOOK,
        payload: id,
    }
};