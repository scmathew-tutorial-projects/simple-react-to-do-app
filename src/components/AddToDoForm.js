import React from "react";
import './AddToDoForm.css';

class AddToDoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    /**
     * Update state value as user enters input
     * @param event user text input event
     */
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    /**
     * Call handleSubmit function passed in from parent component
     * Reset state back to empty string
     * @param event submit form event
     */
    handleSubmit(event) {
      // the preventDefault() call is required otherwise the App
      // component is re-mounted
      event.preventDefault()
      this.props.handleSubmit(this.state.value)
      this.setState({value: ''})
    }
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="text-input" type="text" value={this.state.value} onChange={this.handleChange} />
          <input className="submit-input" type="submit" value="Add To Do" />
        </form>
      );
    }
  }

  export default AddToDoForm;