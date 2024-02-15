import "./styles/main.css";
import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfo";
import { PersonalSection } from "./components/PersonalInfo";
import EducationInfoForm from "./components/Education";
import { EducationSection } from "./components/Education";

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
  });
  const [submit, setSubmit] = useState({ personalInfoForm: false, educationInfoForm: false });

  return (
    <>
      <section className="forms-section">
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
      </section>
      <section className="view">
        <PersonalSection submit={submit} formData={userData} />
        <EducationSection submit={submit} formData={userData} />
      </section>
    </>
  );
}

export default App;
