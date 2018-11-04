import { connect } from 'react-redux';

import * as BooksActions from 'actions/BooksActions';
import BookItem from './BookItem';

const mapDispatchToProps = {
    removeBook: BooksActions.removeBook,
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => ({
    book: ownProps.book,
    removeBook: (id: string) => () => (
        dispatchProps.removeBook(id)
    ),
});

export default connect(null, mapDispatchToProps, mergeProps)(BookItem);