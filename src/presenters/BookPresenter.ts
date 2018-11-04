import { get } from 'lodash';
import {BookEntity} from "models/BookEntity";

export default {
    id: (book: BookEntity) => (
        get(book, 'id', '')
    ),
    title: (book: BookEntity) => (
        get(book, 'title', '')
    ),
    img_url: (book: BookEntity) => (
        get(book, 'img_url', '')
    ),
    year: (book: BookEntity) => (
        get(book, 'year', '')
    ),
    authors: (book: BookEntity) => (
        get(book, 'authors', [])
    ),
};