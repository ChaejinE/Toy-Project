import Counter from "../counter.js";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Counter", () => {
  it("render correctly", () => {
    renderCounter();
    expect(screen.getByText("Counter")).toBeInTheDocument();
  });

  it("increment count when the increment button is Clicked", () => {
    renderCounter();
    const button = screen.getByText("+");

    
    fireEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrement count when decrement button is clicked", () => {
    renderCounter();

    const button = screen.getByText("-");
    fireEvent.click(button);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});

function renderCounter() {
  return render(<Counter />);
}