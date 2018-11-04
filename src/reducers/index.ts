import { combineReducers } from 'redux';
import { BookEntity } from 'models/BookEntity';

import { booksReducer } from './booksReducer';
import { bookReducer } from './bookReducer';

export interface State {
    books: BookEntity[];
    book: BookEntity,
}

export const state = combineReducers<State>({
    books: booksReducer,
    book: bookReducer,
});
