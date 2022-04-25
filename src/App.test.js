import {render} from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders an h1", () => {

    const {getByText} = render (<App />); // This is a query
    const h1 = getByText(/Hello React Testing Library/); // Slashes because it's looking for values as a regular expression
    expect(h1).toHaveTextContent("Hello React Testing Library");

});