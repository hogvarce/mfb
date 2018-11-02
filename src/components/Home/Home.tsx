import * as React from "react";
import { PureComponent } from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BookEntity } from 'models/BookEntity';

import * as styles from './Home.styles';

export interface HomeEntity {
    books: BookEntity[];
    getBooks: () => void,
}

class Home extends PureComponent<HomeEntity> {
    componentDidMount () {
        const { getBooks } = this.props;
        getBooks();
    }
    render() {
        const { books } = this.props;
        return (
            <ListGroup>
                {books.map(book => (
                    <ListGroupItem key={book.id} className={styles.listItem}>
                        <span>{book.title}</span>
                        <Link to={`${book.id}`}><span className={styles.buttonLink}>Edit</span></Link>
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

export default Home;
