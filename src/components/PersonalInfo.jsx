import { useState } from "react";

export default function PersonalInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setSubmit] = useState(false);
  const [editClick, isClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFirstName(formData.get("firstName"));
    setLastName(formData.get("lastName"));
    setEmail(formData.get("email"));
    setPhone(formData.get("phone"));
    setSubmit(true);
    {
      editClick ? isClicked(false) : isClicked(true);
    }
  }

  function onClick() {
    {
      editClick ? isClicked(false) : isClicked(true);
    }
  }

  return (
    <section>
      <Button type="edit" text="Edit Your Personal Data" onClick={onClick} />
      {editClick ? (
        <>
          <h2>Personal Information:</h2>
          <div className="form-container">
            <form action="#" onSubmit={handleSubmit}>
              <InputField
                text="First Name:"
                type="text"
                name="firstName"
                id="firstName"
                defaultValue={firstName}
              />
              <InputField
                text="Last Name:"
                type="text"
                name="lastName"
                id="lastName"
                defaultValue={lastName}
              />
              <InputField text="Email:" type="mail" name="email" id="email" defaultValue={email} />
              <InputField text="Phone Number:" type="number" name="phone" id="phone" defaultValue={phone} />
              <Button text="Submit" type="submit" />
            </form>
          </div>
        </>
      ) : null}
      <div className="right-Container">
        {isSubmitted ? (
          <CreatePersonalInfo firstName={firstName} lastName={lastName} email={email} phone={phone} />
        ) : null}
      </div>
    </section>
  );
}

function Button({ text, type, onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {text}{" "}
    </button>
  );
}

function InputField({ text, type, name, id, value, defaultValue, onChange }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      ></input>
    </>
  );
}

function CreatePersonalInfo({ firstName, lastName, email, phone }) {
  return (
    <div className="personal-info">
      <p>{firstName + " " + lastName}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}
