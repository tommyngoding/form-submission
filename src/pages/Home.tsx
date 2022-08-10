import { SubmissionTable } from "./components/SubmissionTable";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOCALSTORAGE_KEYNAME } from "../constants";
import { Submission } from "../entity/Submission";
import { Button, Container } from "@mui/material";

export const Home = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const dataLocal = localStorage.getItem(LOCALSTORAGE_KEYNAME);
    if (dataLocal !== null) {
      const dataLocalParsed = JSON.parse(dataLocal);

      const formSubmissions: Submission[] = [];
      dataLocalParsed.map((fs: any) => {
        formSubmissions.push(fs.summary);
      });

      setSubmissions(formSubmissions);
    }
  }, []);

  return (
    <Container>
      <div className="home-topbar">
        <h1>Teravin test React.js</h1>
        <div>
          <Link to="/form-submission">
            {" "}
            <Button variant="contained">+ Add data</Button>
          </Link>
        </div>
      </div>

      <SubmissionTable submissions={submissions} />
    </Container>
  );
};
