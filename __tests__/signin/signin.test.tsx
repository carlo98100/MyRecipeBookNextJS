/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "../../src/app/signin/page";
import Providers from "src/app/components/Providers/Providers";
// import SignUpForm from "../../src/app/signin/components/SignUpForm/SignUpForm";

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			prefetch: () => null,
		};
	},
	useSearchParams() {
		return {
			get: () => null,
		};
	},
}));

describe("Signin", () => {
	it("renders a heading with the text Sign in", () => {
		render(
			<Providers>
				<Page />
			</Providers>
		);

		const heading = screen.getByRole("heading", {
			name: /Sign In/i,
		});

		expect(heading).toBeInTheDocument();
	});

	it("updates email state when typed into email input field", () => {
		render(
			<Providers>
				<Page />
			</Providers>
		);
		const emailInput = screen.getByPlaceholderText("Enter a valid email");
		fireEvent.change(emailInput, { target: { value: "test@example.com" } });
		expect(emailInput).toHaveValue("test@example.com");
	});

	it("updates password state when typed into password input field", () => {
		render(
			<Providers>
				<Page />
			</Providers>
		);
		const passwordInput = screen.getByPlaceholderText("**********");
		fireEvent.change(passwordInput, { target: { value: "password123" } });
		expect(passwordInput).toHaveValue("password123");
	});

	it("renders a button with the text Sign In", () => {
		render(
			<Providers>
				<Page />
			</Providers>
		);

		const button = screen.getByRole("button", {
			name: /Sign In/i,
		});

		expect(button).toBeInTheDocument();
	});

	it("renders a label button with the text Sign Up", () => {
		render(
			<Providers>
				<Page />
			</Providers>
		);

		const heading = screen.getByRole("heading", {
			name: /Sign Up/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
