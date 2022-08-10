import { Submission } from "../../entity/Submission";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface SubmissionTableProsp {
  submissions: Submission[];
}

export const SubmissionTable = ({ submissions }: SubmissionTableProsp) => {
  return (
    <Table>
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
                <Button variant="outlined">Detail</Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
