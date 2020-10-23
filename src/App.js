import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";

const sexLabel = {
  m: "мужской",
  f: "женский",
}

export default class App extends React.Component {
  state = {
    name: '',
    lastname: '',
    age: undefined,
    sex: undefined,
    list: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://venbest-test.herokuapp.com/`
      );
      if (response.ok) {
        const list = await response.json();
        this.setState({ list })
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  handleInputChange = key => value => {
    this.setState({ [key]: value });
  }

  getFilteredList = () => {
    const { name, lastname, list, sex, age} = this.state;

    const _list = list.filter(item => {
      let showItem = true;

      if (!item.name.toLowerCase().includes(name.toLowerCase())) showItem = false;
      if (!item.lastname.toLowerCase().includes(lastname.toLowerCase())) showItem = false;
      if (sex && item.sex !== sex) showItem = false;
      if (age && item.age !== +age) showItem = false;

      return showItem;
    });

    return _list;
  }

  render() {
    return (
      <>
        <Info />
        <Form handleInputChange={this.handleInputChange} />
        <div className="list">
          {this.getFilteredList().map(({ name, lastname, age, sex }) => (
            <div key={`${lastname}_${name}`} class="list__item">
              <div>{name} {lastname}</div>
              <div>Возраст: {age}</div>
              <div>Пол: {sexLabel[sex]}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
