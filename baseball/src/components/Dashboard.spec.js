import React from "react"
import ReactDOM from 'react-dom';
import {render, fireEvent} from "@testing-library/react"
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from "./Dashboard"

describe("Dashboard tests", () => {
    it('component should render', () => {
        const renderTest = render(<Dashboard/>)
    })
    it ('renders the strike, ball, hit, and foul buttons', () => {
        const dashboard = render(<Dashboard />);
        const strikeButton = dashboard.getByText(/strike/i);
        const ballButton = dashboard.getByText(/ball/i);
        const hitButton = dashboard.getByText(/hit/i);
        const foulButton = dashboard.getByText(/foul/i);

        expect(strikeButton).toHaveTextContent(/strike/i);
        expect(ballButton).toHaveTextContent(/ball/i);
        expect(hitButton).toHaveTextContent(/hit/i);
        expect(foulButton).toHaveTextContent(/foul/i);
    })
})