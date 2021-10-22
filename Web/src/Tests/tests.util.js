import { render as rtlRender, screen } from '@testing-library/react';
//import MutationObserver from ' @sheerun/mutationobserver-shim';
import { server } from './__mocks__/server/server';

beforeAll(()=> server.listen());
afterEach(()=> server.resetHandlers());
afterAll(()=> server.close());

//window.MutationObserver = MutationObserver;

//const render = (ui, {...renderOptions}) => rtlRender(ui, {...renderOptions})
const render = (ui) => rtlRender(ui)

export * from '@testing-library/react';
export { render };