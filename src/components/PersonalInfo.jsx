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
      <section className="personal-info">
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
          <form action="#" onSubmit={onSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName" defaultValue={userData.firstName} />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName" defaultValue={userData.lastName} />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" defaultValue={userData.email} />
            <label htmlFor="phone">Phone: </label>
            <input type="number" id="number" name="number" defaultValue={userData.phone} />
            <button type="submit">Submit</button>
          </form>
        ) : null}
      </section>
    </>
  );
}

export function PersonalSection({ formData, submit }) {
  return (
    <>
      {submit.personalInfoForm ? (
        <div className="personal-info">
          <p>{formData.firstName + " " + formData.lastName}</p>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
        </div>
      ) : null}
    </>
  );
}
