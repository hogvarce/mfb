import { css } from 'emotion';

export const addBlock = css`
    display: flex;
    justify-content: flex-end;
    margin: 20px auto;
`;

export const add = css`
    background: #1473c3;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;
    &: hover {
        text-decoration: none;
        background: #28a745;
        color: white;
    }
`;
