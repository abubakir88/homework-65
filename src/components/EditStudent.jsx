import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class EditStudent extends Component {
  render() {
    const { addModal, closeAddModal } = this.props;
    return (
      <div>
        <Modal show={addModal} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editing student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  FirstName
                </label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lasttName" className="form-label">
                  LastName
                </label>
                <input type="text" className="form-control" id="LastName" />
              </div>
              <div className="mb-3">
                <label htmlFor="gender">Gender</label>
                <select id="gender" className="form-select mt-1">
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Number
                </label>
                <input type="number" className="form-control" id="number" />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-inout"
                  id="doesWork"
                />
                <label htmlFor="doesWork" className="form-check-label">
                  Does work?
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Close
            </Button>
            <Button variant="primary" onClick={closeAddModal}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditStudent;
