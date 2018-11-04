import * as React from "react";
import { PureComponent } from "react";
import { Link } from "react-router-dom";
import ListBooks from 'components/ListBooks';
import { BookEntity } from 'models/BookEntity';

import * as styles from './Home.styles';

export interface PropTypes {
    books: BookEntity[];
    getBooks: () => void,
}


class Home extends PureComponent<PropTypes> {
    componentDidMount () {
        const { getBooks } = this.props;
        getBooks();
    }

    render() {
        const { books } = this.props;
        return (
            <div>
                <div className={styles.addBlock}>
                    <Link className={styles.add} to="/create">Add book</Link>
                </div>
                <ListBooks books={books} />
            </div>
        );
    }
}

export default Home;
