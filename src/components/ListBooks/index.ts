import { connect } from 'react-redux';

import * as BooksActions from 'actions/BooksActions';
import ListBooks from './ListBooks';

const mapDispatchToProps = {
    removeBook: BooksActions.removeBook,
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => ({
    books: ownProps.books,
    removeBook: (id: string) => () => (
        dispatchProps.removeBook(id)
    ),
});

export default connect(null, mapDispatchToProps, mergeProps)(ListBooks);