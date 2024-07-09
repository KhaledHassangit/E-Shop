import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function SpinnerComponent() {
    return (
        <Container className=''>
        <Button variant="primary" disabled>
            <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            Loading...
        </Button>
        </Container>
    );
}

export default SpinnerComponent;