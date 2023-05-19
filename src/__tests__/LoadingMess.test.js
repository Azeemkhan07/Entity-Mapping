import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "../DataTable";

describe("Loading Screen", () => {
  it("should render without throwing an error and render loading message when data is null", () => {
    render(<DataTable />);
    const loadingMessage = screen.queryByText("Loading data...");
    expect(loadingMessage).toBeInTheDocument();
  });
});
