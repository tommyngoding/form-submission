import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { submissions } from "../../../dummyData";
import { SubmissionTable } from "../SubmissionTable";

describe("SubmissionTable", () => {
  it("renders column headers", () => {
    render(
      <MemoryRouter>
        <SubmissionTable submissions={[]} />
      </MemoryRouter>
    );
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
    render(
      <MemoryRouter>
        <SubmissionTable submissions={submissions} />
      </MemoryRouter>
    );
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
