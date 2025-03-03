import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('FilmContainer Component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<FilmContainer isLoading={false} list={[]} />);
  });
});
