import React, { Component } from "react";
import clas from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/persons/persons";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    person: [
      { id: "1", name: "swastik pal", age: 25 },
      { id: "2", name: "ayushi", age: 24 },
      { id: "3", name: "sarasvati", age: 20 },
    ],
    otherState: "some other state",
    showPersons: false,
    showcockpit: true,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] ComponentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[app.js]shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[app.js]componentDidUpdate");
  }

  toggelPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonalHandler = (personIndex) => {
    // const persons = this.state.person; => this is not a good aproch as in java script array and object just have reffrence but not a coppy so changing in this is actualy changing in original object which is not agood aproch;
    const persons = [...this.state.person];
    // ... is a spread operater in javascript in an array is  use to just add the other array or any thing with the new array that is initiate;
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.person[personIndex],
    };
    // alternative of above is  const person =Object.assign({},this.state.person[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        person: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
    console.log(this.state.changeCounter);
  };

  render() {
    console.log("[App.js] rander");
    let person = null;
    if (this.state.showPersons) {
      person = (
        <Persons
          person={this.state.person}
          nameChangeHandler={this.nameChangeHandler}
          deletePersonalHandler={this.deletePersonalHandler}
        />
      );
    }
    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showcockpit: false });
          }}
        >
          cockpit
        </button>
        <AuthContext.Provider
          value={{
            toggelPersonsHandler: this.toggelPersonsHandler,
            showPersons: this.state.showPersons,
            personLength: this.state.person.length,
          }}
        >
          {this.state.showcockpit ? <Cockpit /> : null}
          {person}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,"Does it work now"))
  }
}

export default withClass(App, clas.App);
