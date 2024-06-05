/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "../../src/app/signin/page";
import Providers from "src/app/components/Providers/Providers";

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
});
