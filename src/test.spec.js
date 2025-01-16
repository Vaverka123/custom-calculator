import { fireEvent, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import fs from "fs";
import path from "path";

describe("Calculator tests", () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");
    document.body.innerHTML = html;
    const script = document.createElement("script");
    script.src = path.resolve(__dirname, "index.js");
    document.body.script = script;
  });

  it("should render the calculator page", () => {
    const calc = screen.getByTestId("calc");
    expect(calc).toBeInTheDocument();
  });

  it("should add 1 to display", () => {
    const one = screen.getByText("1");
    const input = screen.getByTestId("input");
    fireEvent.click(one);
    fireEvent.click(one);
    fireEvent.click(one);
    expect(input).toHaveValue("111");
  });
});
