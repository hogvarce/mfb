import * as React from 'react';
import { Link } from "react-router-dom";
import BookPresenter from 'presenters/BookPresenter';
import { ListGroupItem, Image, Label, Button } from 'react-bootstrap';
import { BookEntity } from "models/BookEntity";

import * as styles from './BookItem.styles';

interface PropTypes {
    book: BookEntity,
    removeBook: (id: string) => () => void,
}

const BookItem = ({ book, removeBook }: PropTypes) => (
    <ListGroupItem key={BookPresenter.id(book)} className={styles.listItem}>
        <div className={styles.image}>
            <Image src={BookPresenter.img_url(book)} thumbnail />
        </div>
        <div className={styles.info}>
            <h4><Label>{BookPresenter.title(book)}</Label></h4>
            <div>{BookPresenter.year(book)}</div>
            <div><strong>ISBN</strong>: {BookPresenter.id(book)}</div>
            <div>
                <strong>Authors:</strong>
                <ul>
                    {BookPresenter.authors(book).map((author: string, i: number) => (
                        <li key={`${i}-${author}`}>{author}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className={styles.buttons}>
            <Link to={`${BookPresenter.id(book)}`}><span className={styles.buttonLink}>Edit</span></Link>
            <br />
            <Button bsStyle="danger" onClick={removeBook(book.id)}>Remove</Button>
        </div>
    </ListGroupItem>
);

export default BookItem;