import "./styles/main.css";
import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfo";
import { PersonalSection } from "./components/PersonalInfo";
import EducationInfoForm from "./components/Education";
import { EducationSection } from "./components/Education";
import ExperienceInfoForm, { ExperienceSection } from "./components/Experience";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    companyName: "",
    position: "",
    responsibilities: "",
  });

  const [submit, setSubmit] = useState({
    personalInfoForm: false,
    educationInfoForm: false,
    experienceInfoForm: false,
  });

  return (
    <>
      <section className="forms-section">
        <h2>Insert your data:</h2>
        <PersonalInfoForm
          userData={userData}
          setUserData={setUserData}
          submit={submit}
          setSubmit={setSubmit}
        />
        <EducationInfoForm
          userData={userData}
          setUserData={setUserData}
          submit={submit}
          setSubmit={setSubmit}
        />
        <ExperienceInfoForm
          userData={userData}
          setUserData={setUserData}
          submit={submit}
          setSubmit={setSubmit}
        />
      </section>
      <section className="display-data">
        <PersonalSection submit={submit} formData={userData} />
        <EducationSection submit={submit} formData={userData} />
        <ExperienceSection submit={submit} formData={userData} />
      </section>
    </>
  );
}

export default App;
