import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import About from '@/pages/about';

describe('About page', () => {
  it('renders a heading', () => {
    render(<About />)

    const heading = screen.getByRole('heading');
    const headerText = 'Hello World';

    expect(heading).toHaveTextContent(headerText);
  });
});