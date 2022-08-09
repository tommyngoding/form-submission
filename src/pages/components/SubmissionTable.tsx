import { Submission } from "../../entity/Submission";

interface SubmissionTableProsp {
  submissions: Submission[];
}

export const SubmissionTable = ({ submissions }: SubmissionTableProsp) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID No.</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {submissions.map((submission, key) => (
          <tr key={key}>
            <td>{submission.id}</td>
            <td>{submission.nama}</td>
            <td>{submission.alamat}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
