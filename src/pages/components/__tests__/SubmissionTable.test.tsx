import { render, screen } from "@testing-library/react";
import { submissions } from "../../../dummyData";
import { SubmissionTable } from "../SubmissionTable";

describe("SubmissionTable", () => {
  it("renders column headers", () => {
    render(<SubmissionTable submissions={[]} />);
    expect(
      screen.getByRole("columnheader", { name: "ID No." })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Nama" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Alamat" })
    ).toBeInTheDocument();
  });

  it("renders data", () => {
    render(<SubmissionTable submissions={submissions} />);
    expect(screen.getAllByRole("row")).toHaveLength(5);
    expect(
      screen.getByRole("cell", { name: submissions[0].id.toString() })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: submissions[0].nama })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: submissions[0].alamat })
    ).toBeInTheDocument();
  });
});
