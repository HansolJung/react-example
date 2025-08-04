import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function FindAddrModal({show, close, complete}) {

    useEffect(()=>{
        if (show && window.daum) {
            new window.daum.Postcode({
                oncomplete: function(data) {
                    complete(data);
                    close();
                },
                width: '100%',
                height: '100%'
            }).embed(document.querySelector('#postcode'));
        }
    }, [show, close, complete]);

    return (
        <>
            <Modal show={show} onHide={close} centered>
                <Modal.Header closeButton>
                    <Modal.Title>주소 검색</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id='postcode' style={{width: '100%', height: '500px'}}></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={close}>닫기</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FindAddrModal;