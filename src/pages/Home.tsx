import { SubmissionTable } from "./components/SubmissionTable";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Teravin test React.js</h1>
      <div>
        <Link to="/form-submission">
          {" "}
          <button>+ Add data</button>
        </Link>
      </div>
      <SubmissionTable submissions={[]} />
    </>
  );
};
