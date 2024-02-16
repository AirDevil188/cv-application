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
      <section>
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
          <form action="#" onSubmit={onSubmit}>
            <label htmlFor="school">School: </label>
            <input type="text" id="school" name="school" defaultValue={userData.school} />
            <label htmlFor="degree">Degree: </label>
            <input type="text" name="degree" id="degree" defaultValue={userData.degree} />
            <label htmlFor="startDate">From: </label>
            <input type="date" name="startDate" id="startDate" defaultValue={userData.startDate} />
            <label htmlFor="endDate">Until: </label>
            <input type="date" id="endDate" name="endDate" defaultValue={userData.endDate} />
            <button type="submit">Submit</button>
          </form>
        ) : null}
      </section>
    </>
  );
}

export function EducationSection({ formData, submit }) {
  return (
    <>
      {submit.educationInfoForm ? (
        <div className="education-info">
          <p>{formData.school}</p>
          <p>{formData.degree}</p>
          <p>{formData.startDate + "-" + formData.endDate}</p>
        </div>
      ) : null}
    </>
  );
}
