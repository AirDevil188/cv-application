import { useState } from "react";

export default function PersonalInfoForm({ userData, setUserData, submit, setSubmit }) {
  const [active, setActive] = useState(false);

  function onSubmit(e) {
    const formData = new FormData(e.target);
    e.preventDefault();
    setUserData({
      ...userData,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("number"),
    });

    setSubmit({ ...submit, personalInfoForm: true });
    setActive(false);
  }

  function onClick() {
    {
      active ? setActive(false) : setActive(true);
    }
  }

  return (
    <>
      <div className="personal-form">
        {submit.personalInfoForm ? (
          <button type="button" onClick={onClick}>
            Edit Personal Info
          </button>
        ) : (
          <button type="button" onClick={onClick}>
            Create Personal Info
          </button>
        )}
        {active ? (
          <div className="form-container">
            <form action="#" onSubmit={onSubmit}>
              <h2>Personal Info:</h2>
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={userData.firstName}
                required={true}
              />
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                defaultValue={userData.lastName}
                required={true}
              />
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" defaultValue={userData.email} required={true} />
              <label htmlFor="phone">Phone: </label>
              <input type="number" id="number" name="number" defaultValue={userData.phone} required={true} />
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
}

export function PersonalSection({ formData }) {
  return (
    <div className="personal-info">
      <div className="full-name">
        <h3>Full Name:</h3>

        <p>{formData.firstName + " " + formData.lastName}</p>
      </div>
      <div className="email">
        <h3>Email:</h3>
        <p>{formData.email}</p>
      </div>
      <div className="phone">
        <h3>Phone:</h3>
        <p>{formData.phone}</p>
      </div>
    </div>
  );
}
