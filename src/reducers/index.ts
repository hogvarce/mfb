import { combineReducers } from 'redux';
import { BookEntity } from 'models/BookEntity';

import { booksReducer } from './booksReducer';

export interface State {
    books: BookEntity[];
}

export const state = combineReducers<State>({
    books: booksReducer,
});
