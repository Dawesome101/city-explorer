import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Error extends React.Component{
  render(){
    return(
      <>
        <Modal
          show={this.props.error}
          onHide={() => this.props.handleClose()}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>An Error Has Occured</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.errorMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.props.handleClose()}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  };
}

export default Error