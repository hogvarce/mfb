import { connect } from 'react-redux';

import * as BooksActions from 'actions/BooksActions';
import DetailPage from './DetailPage';

const mapStateToProps = (state: any, ownProps: any) => {
    const book = state.book;
    return {
        id: ownProps.match.params.id,
        book,
    };
};

const mapDispatchToProps = {
    getBook: BooksActions.getBook,
    editBook: BooksActions.editBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);