import * as React from 'react';
import FieldGroup from 'components/FieldGroup';
import { Button } from 'react-bootstrap';
import { set, isNil } from 'lodash';
import { BookEntity } from 'models/BookEntity';
import BookPresenter from 'presenters/BookPresenter';

interface PropsTypes {
    id: string,
    book: BookEntity,
    editBook: (book:BookEntity) => Promise<any>,
    getBook: (id: string) => void,
    history: any,
}

interface StateTypes {
    book: BookEntity | null,
}

class CreatePage extends React.PureComponent<PropsTypes, StateTypes> {
    componentDidMount() {
        const { id, getBook } = this.props;
        getBook(id);
    }
    state = {
        book: null,
    };
    componentWillReceiveProps(newProps: PropsTypes) {
        this.setState({
            book: newProps.book,
        });
    }
    onSubmit = (e: any) => {
        e.preventDefault();
        const { editBook, history } = this.props;
        const { book } = this.state;
        editBook(book).then(() => {
            history.push('/');
        });
    };
    onChangeField = (field: string) => (e: any) => {
        const { book } = this.state;
        const value = e.target.value;
        switch (field) {
            case 'authors':
                set(book, field, value.split(','));
                break;
            default:
                set(book, field, value);
        }
        this.setState({book: { ...book }});
    };
    render() {
        const { book } = this.state;
        if (isNil(book)) {
            return null;
        }
        return (
            <div>
                <h1>Edit book {book.title}</h1>
                <form onSubmit={this.onSubmit}>
                    <FieldGroup
                        id="id"
                        type="text"
                        label="ID"
                        placeholder="Enter id"
                        value={BookPresenter.id(book)}
                        disabled
                    />
                    <FieldGroup
                        id="title"
                        type="text"
                        label="title"
                        placeholder="Enter title"
                        value={BookPresenter.title(book)}
                        onChange={this.onChangeField('title')}
                    />
                    <FieldGroup
                        id="img_url"
                        type="text"
                        label="Adress image title"
                        placeholder="Enter url"
                        value={BookPresenter.img_url(book)}
                        onChange={this.onChangeField('img_url')}
                    />
                    <FieldGroup
                        id="authors"
                        type="text"
                        label="Authors"
                        placeholder="Enter authors"
                        value={BookPresenter.authors(book)}
                        onChange={this.onChangeField('authors')}
                    />
                    <Button bsStyle="success" type="submit">Save book</Button>
                </form>
            </div>
        );
    }
}

export default CreatePage;
