import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BookItem from 'components/BookItem';

Enzyme.configure({ adapter: new Adapter() });

describe('BookItem', () => {
    it('should render default component', () => {
        const props = {
            book: {
                id: 'test',
                title: 'test',
                authors: ['test'],
            },
            removeBook: (id) => {},
        };
        const component = shallow(<BookItem {...props} />);
        expect(component).toHaveLength(1);
    });

});
