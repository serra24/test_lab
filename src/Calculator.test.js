// src/components/Calculator.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('renders calculator', () => {
  render(<Calculator />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('performs basic addition', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByRole('textbox')).toHaveValue('3');
});

// You can add more tests for other operations like subtraction, multiplication, division, etc.

