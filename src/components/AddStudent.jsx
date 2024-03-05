import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        firstName: "",
        lastName: "",
        gender: "",
        number: "",
        doesWork: false,
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.closeAddModal();
    console.log(this.state.student);
  };

  render() {
    const { addModal, closeAddModal } = this.props;
    const { firstName, lastName, gender, number, doesWork } =
      this.state.student;
    const { handleChange, handleAdd } = this;
    return (
      <div>
        <Modal show={addModal} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add students </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  FirstName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lasttName" className="form-label">
                  LastName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="LastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  className="form-select"
                  value={gender}
                  onChange={handleChange}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  value={number}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="doesWork"
                  checked={doesWork}
                  onChange={(e) =>
                    this.setState({ doesWork: e.target.checked })
                  }
                />
                <label htmlFor="doesWork" className="form-check-label">
                  Does work?
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Cansel
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddStudent;
