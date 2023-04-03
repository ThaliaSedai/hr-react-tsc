import React, { ChangeEvent, FormEvent, useState, Component } from "react";

interface RegistrationFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
  birthCountry: string;
  birthPlace: string;
  jmbg: string;
  phoneNumber: string;
  profilePicture: File | null;
}

export class RegistrationForm extends React.Component<{}, RegistrationFormState> {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    birthCountry: "",
    birthPlace: "",
    jmbg: "",
    phoneNumber: "",
    profilePicture: null,
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
  
    if (name === "profilePicture") {
      const file = target.files && target.files[0];
      this.setState({ profilePicture: file });
    } else {
      const newState = { [name]: value };
      this.setState(prevState => ({ ...prevState, ...newState }));
    }
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
  };
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Registration</h1>
        <label>
          First Name:
          <br />
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Last Name:
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Date of Birth:
          <br />
          <input
            type="date"
            name="birthDate"
            value={this.state.birthDate}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Date Country:
          <br />
          <input
            type="text"
            name="birthCountry"
            value={this.state.birthCountry}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Date Place:
          <br />
          <input
            type="text"
            name="birthPlace"
            value={this.state.birthPlace}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Phone number:
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Profile Picture:
          <input
            type="file"
            name="profilePicture"
            onChange={this.handleInputChange}
            accept="image/*"
          />
        </label>
        <br /><br />
        <button type="submit">Register</button>
        <br /><br />
        <label>You already have an account? Log-in here</label>
      </form>
    );
  };
}

export default RegistrationForm;
