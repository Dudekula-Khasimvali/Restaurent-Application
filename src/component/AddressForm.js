import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddressForm({ show, onHide, onSave, addresses = [] }) {
  const [newAddress, setNewAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    state: '',
    pincode: '',
    buildingNameNumber: '',
    streetName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(newAddress);
    onHide();  // Close the modal after saving
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="addressLine1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="text"
              name="addressLine1"
              value={newAddress.addressLine1}
              onChange={handleChange}
              placeholder="Enter address line 1"
            />
          </Form.Group>
          <Form.Group controlId="addressLine2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              name="addressLine2"
              value={newAddress.addressLine2}
              onChange={handleChange}
              placeholder="Enter address line 2"
            />
          </Form.Group>
          <Form.Group controlId="buildingNameNumber">
            <Form.Label>Building Name/Number</Form.Label>
            <Form.Control
              type="text"
              name="buildingNameNumber"
              value={newAddress.buildingNameNumber}
              onChange={handleChange}
              placeholder="Enter building name/number"
            />
          </Form.Group>
          <Form.Group controlId="streetName">
            <Form.Label>Street Name</Form.Label>
            <Form.Control
              type="text"
              name="streetName"
              value={newAddress.streetName}
              onChange={handleChange}
              placeholder="Enter street name"
            />
          </Form.Group>
          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={newAddress.state}
              onChange={handleChange}
              placeholder="Enter state"
            />
          </Form.Group>
          <Form.Group controlId="pincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              name="pincode"
              value={newAddress.pincode}
              onChange={handleChange}
              placeholder="Enter pincode"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddressForm;
