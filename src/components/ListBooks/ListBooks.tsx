import * as React from 'react';
import { ListGroup } from 'react-bootstrap';

import {BookEntity} from "models/BookEntity";
import BookItem from 'components/BookItem';''

export interface PropTypes {
    books: BookEntity[];
}

const ListBooks = ({ books }: PropTypes) => (
    <ListGroup>
        {books.map(book => (
            <BookItem book={book} />
        ))}
    </ListGroup>
);

export default ListBooks;