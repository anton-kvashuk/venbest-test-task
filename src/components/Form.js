import React from "react";

const Form = ({ handleInputChange }) => {
  const onChange = key => e => {
    handleInputChange(key)(e.target.value);
  }

  return (
  <div className="filter">
    <div className="filter__row">
      <label>Имя:</label>
      <input onChange={onChange('name')} type="text" name="name" placeholder="" />
    </div>
    <div className="filter__row">
      <label>Фамилия:</label>
      <input onChange={onChange('lastname')} type="text" name="lastname" placeholder="" />
    </div>
    <div className="filter__row">
      <label>Возраст:</label>
      <input type="number" onChange={onChange('age')} name="age" placeholder="" />
    </div>
    <div className="filter__row">
      <label>Пол:</label>
      <input onChange={onChange('sex')} type="radio" id="male" name="sex" value="m" />
      <label for="male">Мужской </label>
      <input onChange={onChange('sex')} type="radio" id="female" name="sex" value="f" />
      <label for="female"> Женский</label>
    </div>
  </div>
)};

export default Form;
