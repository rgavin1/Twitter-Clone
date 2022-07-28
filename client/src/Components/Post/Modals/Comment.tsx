import React, { Dispatch, SetStateAction } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Comment: React.FC<{ showModal: boolean; toggleModal: Dispatch<SetStateAction<boolean>>; }> = ({ showModal, toggleModal }) => {
    return (
        <Modal size='lg' show={showModal}>
            <Modal.Header style={{ marginRight: 'auto' }} closeButton>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
                <Form.Control as="textarea" rows={3} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Reply</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Comment;