import { Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SuccessStep = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Paper className="paper-form">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          style={{ marginTop: "50px" }}
        >
          Data Tersimpan
        </Typography>

        <div style={{ marginTop: "100px" }}>
          <Link to="/">
            <Button variant="contained" size="small">
              Back to home
            </Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
};
