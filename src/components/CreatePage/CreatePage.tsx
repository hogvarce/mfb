import * as React from 'react';
import FieldGroup from 'components/FieldGroup';
import { Button } from 'react-bootstrap';
import { set } from 'lodash';
import { BookEntity } from 'models/BookEntity';
import BookPresenter from 'presenters/BookPresenter';

interface Props {
    addBook: (book:BookEntity) => Promise<any>,
    history: any,
}

interface StateTypes {
    book: BookEntity,
}

class CreatePage extends React.PureComponent<Props, StateTypes> {
    state = {
        book: {},
    };
    onSubmit = (e: any) => {
        e.preventDefault();
        const { addBook, history } = this.props;
        const { book } = this.state;
        addBook(book).then(() => {
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
        return (
            <div>
                <h1>Create new book</h1>
                <form onSubmit={this.onSubmit}>
                    <FieldGroup
                        id="id"
                        type="text"
                        label="ID"
                        placeholder="Enter id"
                        value={BookPresenter.id(book)}
                        onChange={this.onChangeField('id')}
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
                    <Button bsStyle="success" type="submit">Create book</Button>
                </form>
            </div>
        );
    }
}

export default CreatePage;
