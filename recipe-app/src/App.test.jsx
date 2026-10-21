import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi, test, expect } from 'vitest';
import App from './App';
import RecipeAPI from './utils/RecipeAPI.js';

const recipes = [
  { id: 1, name: 'Pizza', description: 'Put it in the oven', price: '5.00', time_minutes: 10,
    image: null, ingredients: [{ id: 1, name: 'oil' }], tags: [{ id: 1, name: 'vegetarian' }] },
];

vi.spyOn(RecipeAPI, 'get').mockResolvedValue({ data: recipes });

test('renders the recipe list from the API', async () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
  expect(await screen.findByText('Pizza')).toBeInTheDocument();
  expect(RecipeAPI.get).toHaveBeenCalledWith('recipes/details/');
});

test('renders the edit form with the recipe values', async () => {
  render(<MemoryRouter initialEntries={['/recipes/edit/1/']}><App /></MemoryRouter>);
  expect(await screen.findByDisplayValue('Pizza')).toBeInTheDocument();
  expect(screen.getByDisplayValue('oil')).toBeInTheDocument();
});
