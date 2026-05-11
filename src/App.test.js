// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TauAsset title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TauAsset/i);
    expect(titleElement).toBeInTheDocument();
});
