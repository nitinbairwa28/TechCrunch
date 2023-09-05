import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can add your code here to handle form submission, e.g., sending data to a server or performing validation
    console.log('Form data submitted:', this.state);
    // Reset the form fields after submission
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    return (
      <div style={styles.contactFormContainer}>
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              style={styles.input}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
      
    );
  }
}

const styles = {
  contactFormContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    marginTop:'100px',
    marginBottom:'100px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    margin: '0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};


export default ContactForm;
