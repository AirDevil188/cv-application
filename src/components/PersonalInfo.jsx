import { useState } from "react";

export default function PersonalInfoForm({ userData, setUserData, setSubmit }) {
  function onSubmit(e) {
    const formData = new FormData(e.target);

    console.log(e.target);
    e.preventDefault();
    setUserData({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("number"),
    });
    setSubmit(true);
  }

  return (
    <section className="personal-info">
      <button type="button">Edit Personal Info</button>
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
    </section>
  );
}

export function PersonalSection({ formData, submit }) {
  return (
    <>
      {submit ? (
        <div className="personal-info">
          <p>{formData.firstName + " " + formData.lastName}</p>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
        </div>
      ) : null}
    </>
  );
}
