import { connect } from 'react-redux';

import * as BooksActions from 'actions/BooksActions';
import Home from './Home';

const mapStateToProps = (state: any) => {
    const books = state.books;
    return {
        books,
    };
};

const mapDispatchToProps = {
    getBooks: BooksActions.getBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
