import { useState } from "react";

export default function ExperienceInfoForm({ userData, setUserData, submit, setSubmit }) {
  const [active, setActive] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    setUserData({
      ...userData,
      companyName: formData.get("companyName"),
      position: formData.get("position"),
      responsibilities: formData.get("responsibilities"),
    });
    setSubmit({ ...submit, experienceInfoForm: true });
    setActive(false);
  }

  function onClick() {
    {
      active ? setActive(false) : setActive(true);
    }
  }

  return (
    <div className="experience-form">
      {submit.experienceInfoForm ? (
        <button type="button" onClick={onClick}>
          Edit Experience Information
        </button>
      ) : (
        <button type="button" onClick={onClick}>
          Create Experience Information
        </button>
      )}

      {active ? (
        <div className="form-container">
          <form action="#" onSubmit={onSubmit}>
            <h2>Experience Info:</h2>
            <label htmlFor="companyName">Company name: </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              defaultValue={userData.companyName}
              required={true}
            />
            <label htmlFor="positionTitle">Position Title: </label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              defaultValue={userData.position}
              required={true}
            />
            <label htmlFor="responsibilities">Responsibilities: </label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities"
              defaultValue={userData.responsibilities}
            />
            <div className="form-button-container"></div>
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export function ExperienceSection({ formData }) {
  return (
    <div className="experience-info">
      <div className="company">
        <h3>Company:</h3>
        <p>{formData.companyName}</p>
      </div>
      <div className="position">
        <h3>Position:</h3>
        <p>{formData.position}</p>
      </div>
      <div className="responsibilities">
        <h3>Responsibilities:</h3>
        <p>{formData.responsibilities}</p>
      </div>
    </div>
  );
}
