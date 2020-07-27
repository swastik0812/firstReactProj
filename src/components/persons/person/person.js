import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import person from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
//we can use Fragment as well insted of Aux as Aux is build by us because same work is done inside the fragment as well in backend
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering");
    return (
      <Aux>
        <p onClick={this.props.Click}>
          I'm a {this.props.name}. I am {this.props.age} year old
        </p>
        <p>{this.props.children}</p>
        <input
          //ref={(inputEl)=>{this.inputElement= inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  Click: propTypes.func,
  age: propTypes.number,
  name: propTypes.string,
  changed: propTypes.func,
};

export default withClass(Person, person.Person);
