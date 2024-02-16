import { useState } from "react";

export default function EducationInfoForm({ userData, setUserData, submit, setSubmit }) {
  const [active, setActive] = useState(false);

  function onSubmit(e) {
    const formData = new FormData(e.target);
    e.preventDefault();

    setUserData({
      ...userData,
      school: formData.get("school"),
      degree: formData.get("degree"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
    });

    setSubmit({ ...submit, educationInfoForm: true });
    setActive(false);
  }

  function onClick() {
    {
      active ? setActive(false) : setActive(true);
    }
  }

  return (
    <>
      <div className="education-form">
        {submit.educationInfoForm ? (
          <button type="button" onClick={onClick}>
            Edit Education Info
          </button>
        ) : (
          <button type="button" onClick={onClick}>
            Create Education Info
          </button>
        )}

        {active ? (
          <div className="form-container">
            <form action="#" onSubmit={onSubmit}>
              <h2>Education Info:</h2>
              <label htmlFor="school">School: </label>
              <input type="text" id="school" name="school" defaultValue={userData.school} required={true} />
              <label htmlFor="degree">Degree: </label>
              <input type="text" name="degree" id="degree" defaultValue={userData.degree} required={true} />
              <label htmlFor="startDate">From: </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                defaultValue={userData.startDate}
                required={true}
              />
              <label htmlFor="endDate">Until: </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                defaultValue={userData.endDate}
                required={true}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
}

export function EducationSection({ formData }) {
  return (
    <div className="education-info">
      <div className="school">
        <h3>School:</h3>
        <p>{formData.school}</p>
      </div>
      <div className="degree">
        <h3>Degree:</h3>
        <p>{formData.degree}</p>
      </div>
      <div className="date">
        <h3>Date:</h3>
        <p>{formData.startDate + "-" + formData.endDate}</p>
      </div>
    </div>
  );
}
