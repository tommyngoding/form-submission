import { Submission } from "../../entity/Submission";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FileSearchOutlined } from "@ant-design/icons";

interface SubmissionTableProsp {
  submissions: Submission[];
}

export const SubmissionTable = ({ submissions }: SubmissionTableProsp) => {
  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: "20px" }}
      className="table-submission"
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID No.</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Alamat</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((submission, key) => (
            <TableRow key={key}>
              <TableCell>{submission.id}</TableCell>
              <TableCell>{submission.nama}</TableCell>
              <TableCell>{submission.alamat}</TableCell>
              <TableCell>
                <Link to={`/detail/${submission.id}`}>
                  <IconButton
                    color="primary"
                    aria-label="detail view"
                    component="label"
                  >
                    <FileSearchOutlined />
                  </IconButton>
                </Link>
              </TableCell>
            </TableRow>
          ))}
          {submissions.length === 0 && (
            <TableRow>
              <TableCell colSpan={4}>
                <div className="no-data">
                  <div>
                    <img src="/no-data.jpeg" width={200} height={200} />
                  </div>
                  <div>Tidak ada data.</div>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
