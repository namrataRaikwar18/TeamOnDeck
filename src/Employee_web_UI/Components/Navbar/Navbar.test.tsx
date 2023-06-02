import {fireEvent, render, screen} from "@testing-library/react";
import { Navbar } from "./Navbar";

beforeEach(() => {
    render(<Navbar showSidebar={false} setShowSidebar={() => {}}/>)
})

describe('Navbar Testing', () => { 
    test("should present profile and name", () => {
        const profile = screen.getByAltText("profile");
        const userName = screen.getByTestId("userName");
        expect(profile).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
    })

    test("should open modal", () => {
        const navProfile = screen.getByTestId("navProfile");
        fireEvent.click(navProfile);
        const changePassword = screen.getByTestId("changePassword");
        expect(changePassword).toBeInTheDocument();
    })

 })


