import React, { PureComponent } from "react";
import Person from "./person/person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props,state){
  //     console.log('[persons.js] getDerivedstateFromProps')
  //     return state;
  // }
    // componentWillReceiveProps is not use now it is in older version
  // componentWillReceiveProps(props){
  //     console.log('[persons.js ]componentWillReceiveProps',props);
  // }

  //we use pureComponent whch work same as shouldComponentUpdate
  // shouldComponentUpdate(nextProps, nextState){
  //     console.log('[persons.js] shouldComponentUpdate');
  //     if(nextProps.person !== this.props.person){
  //         return true;
  //     }else{
  //         return false;
  //     }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[persons.js] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }
  // componentWillUpdate(){

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[persons.js] cmponentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    //you can write any code before this component is removing like on clicking the toggle button back  the persons component is removing
    console.log("[persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering");
    return this.props.person.map((persn, index) => {
      return (
        <Person
          name={persn.name}
          age={persn.age}
          Click={() => this.props.deletePersonalHandler(index)}
          key={persn.id}
          changed={(event) => this.props.nameChangeHandler(event, persn.id)}
        />
      );
    });
  }
}

export default Persons;
