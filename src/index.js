import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const Person = ({ name, img, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <section className="person">
      <img style={{ width: "100px" }} src={url}></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
    </section>
  );
};
const PersonList = () => {
  return (
    <section className="personList">
      <Person name="Alpha" job="developer" img="34" />
      <Person name="Beta" job="Doctor" img="69" />
      <Person name="Gamma" job="Professor" img="61" />
    </section>
  );
};
ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
