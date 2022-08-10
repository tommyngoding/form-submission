import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SuccessStep = () => {
  let navigate = useNavigate();

  return (
    <div>
      <p>Data Tersimpan</p>
      <div>
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
};
