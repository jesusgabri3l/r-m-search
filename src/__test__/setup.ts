import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll } from 'vitest';

import detailCharacterMock from './mocks/detailCharacterMock';
import searchCharacterMock from './mocks/searchCharacterMock';

const apiURL: string = import.meta.env.VITE_API_URL as string;

export const restHandlers = [
  rest.get(`${apiURL}characters/:id`, (req, res, ctx) => {
    const { id } = req.params;
    if (id === '1') return res(ctx.status(200), ctx.json(detailCharacterMock));
    if (id === '13791823') return res(ctx.status(404));
    if (id === 'test') return res(ctx.status(500));
  }),

  rest.get(`${apiURL}characters`, (req, res, ctx) => {
    const q = req.url.searchParams.get('q');
    if (q === 'Rick') return res(ctx.status(200), ctx.json(searchCharacterMock));
    if (q === 'asdfghj') return res(ctx.status(404));
  }),
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
