import React from 'react'
import { Spinner, Stack } from 'react-bootstrap';

const Container: React.FC = () => {
    return (
        <Stack direction="horizontal" style={{ justifyContent: "center", marginTop: "15px" }}>
            <Spinner animation="border" variant="info" />
        </Stack>
    );
}


export default Container