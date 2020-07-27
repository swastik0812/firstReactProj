import React, { useEffect, useRef, useContext } from "react";
import clas from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  //componentDidmMount and componentDidUpdate is combined in useEffect
  // as if we give the empty array as a second perameter than it will exicute only first time .
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    // setTimeout(()=>{
    //     alert('save data to cloud!')
    // },1000);
    //toggleBtnRef.current.click();
    //this return is for the clean up work as before removing this component as in class base component componenntWillUnMount works
    return () => {
      console.log("[cockpit.js] cleanUp work");
    };
  }, []);

  //with no second argument as an array the return is run after every time it is rerender or can say use to cansile some thing after the updation
  useEffect(() => {
    console.log("[Cockpit.js] 2nduseEffect");
    return () => {
      console.log("[cockpit.js] 2ndcleanUp work");
    };
  });
  const classes = [];
  let buttonClass = "";
  if (authContext.showPersons) {
    buttonClass = clas.red;
  }
  if (authContext.personLength <= 2) {
    classes.push(clas.red);
  }
  if (authContext.personLength <= 1) {
    classes.push(clas.bold);
  }
  return (
    <div className={clas.Cockpit}>
      <h1>Hi i am React app</h1>
      <p className={classes.join(" ")}>This is realy working</p>
      <button
        ref={toggleBtnRef}
        className={buttonClass}
        onClick={authContext.toggelPersonsHandler}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
