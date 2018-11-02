import * as React from 'react';

interface Props {
    match: {
        params: {
            id: number,
        }
    },
}

const DetailPage: React.StatelessComponent<Props> = ({ match: { params } }) => {
    const { id } = params;
    return (
        <div>DetailPage of {id}</div>
    );
};

export default DetailPage;
