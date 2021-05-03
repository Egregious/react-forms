import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submitData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    const dataArray = this.state.stubmitData.concat(formData)
    this.setState({
      submitData: dataArray
    })
  }

  listSubmissions = () => {
    return this.state.submitData.map(data => {
      return <div><span> { data.firstName } </span> <span> { data.lastName } </span></div>
    })
  }

  render() {
    return (
      <form>
        <input type="text" 
               name="firstName" 
               onChange={event => this.handleFirstNameChange(event)} 
               value={this.state.firstName} 
        />
        <input type="text" 
               name="lastName" 
               onChange={event => this.handleLastNameChange(event)} 
               value={this.state.lastName} 
        />
      </form>
    )
  }
}

export default Form;