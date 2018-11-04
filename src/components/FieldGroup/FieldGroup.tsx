import * as React from 'react';
import { ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import * as styles from './FieldGroup.styles';

interface PropTypes {
    id: string,
    label: string,
    help: string,
}

const FieldGroup = ({ id, label, help, ...props }: PropTypes) => (
    <FormGroup controlId={id}>
        <ControlLabel className={styles.title}>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);

export default FieldGroup;