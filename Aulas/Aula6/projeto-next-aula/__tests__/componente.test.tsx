import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Coisa from "../src/app/components/TestComponent";

test("Testa o componente", () => {
    render(<Coisa idade={25} />);
    const element = screen.getByText(/Minha idade é 25/i);
    expect(element).toBeInTheDocument();
});
