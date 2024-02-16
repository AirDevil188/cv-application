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
    <section>
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
        <form action="#" onSubmit={onSubmit}>
          <label htmlFor="companyName">Company name: </label>
          <input type="text" id="companyName" name="companyName" defaultValue={userData.companyName} />
          <label htmlFor="positionTitle">Position Title: </label>
          <input type="text" id="positionTitle" name="poistionTitle" defaultValue={userData.position} />
          <label htmlFor="responsibilities">Responsibilities: </label>
          <input
            type="text"
            id="responsibilities"
            name="responsibilities"
            defaultValue={userData.responsibilities}
          />
          <button type="submit">Submit</button>
        </form>
      ) : null}
    </section>
  );
}

export function ExperienceSection({ formData, submit }) {
  return (
    <>
      {submit.experienceInfoForm ? (
        <div className="experience-info">
          <p>{formData.companyName}</p>
          <p>{formData.position}</p>
          <p>{formData.responsibilities}</p>
        </div>
      ) : null}
    </>
  );
}
