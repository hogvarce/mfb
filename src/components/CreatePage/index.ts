import { connect } from 'react-redux';

import * as BooksActions from 'actions/BooksActions';
import CreatePage from './CreatePage';

const mapDispatchToProps = {
    addBook: BooksActions.addBook,
};

export default connect(null, mapDispatchToProps)(CreatePage);
