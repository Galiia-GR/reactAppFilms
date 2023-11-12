import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Vite + React text', () => {
    render(<App />);
    const headingElement = screen.getByText('Vite + React');
    expect(headingElement).toBeTruthy();
  });
});
