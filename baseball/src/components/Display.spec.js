import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';


import Display from './Display.js'
import Dashboard from './Dashboard.js';



describe("<Display/> Component Tests", () => {


    it("renders without crashing", () => {

      const renderTest = render(<Display />);
    });


    it('displays strikes and balls', () => {
        const display = render(<Display />);
        const strikes = display.getByTestId('strikes');
        const balls = display.getByTestId('balls');
        expect(strikes).toHaveTextContent(/strikes:/i);
        expect(balls).toHaveTextContent(/balls:/i);
    })
  }); 