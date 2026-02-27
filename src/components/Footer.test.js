import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders the Footer component", () => {
    render(<Footer />);
    const footerText = screen.getByText("© 2026 - Youbloom Company Limited");
    expect(footerText).toBeInTheDocument();
  });

  test("displays correct copyright text", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("p");
    expect(footer?.textContent).toBe("© 2026 - Youbloom Company Limited");
  });

  test("has correct styling classes", () => {
    const { container } = render(<Footer />);
    const footerDiv = container.firstChild;
    expect(footerDiv?.className).toContain("bg-black");
    expect(footerDiv?.className).toContain("text-white");
  });
});
