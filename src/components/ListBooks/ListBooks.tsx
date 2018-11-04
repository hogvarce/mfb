import * as React from 'react';
import { ListGroup, ListGroupItem, Image, Label, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import BookPresenter from 'presenters/BookPresenter';
import {BookEntity} from "models/BookEntity";
import * as styles from './ListBooks.styles';

export interface PropTypes {
    books: BookEntity[];
    removeBook: (id: string) => () => void,
}

const ListBooks = ({ books, removeBook }: PropTypes) => (
    <ListGroup>
        {books.map(book => (
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
        ))}
    </ListGroup>
);

export default ListBooks;