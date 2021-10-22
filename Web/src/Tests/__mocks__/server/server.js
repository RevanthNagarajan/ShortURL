import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { urlHandler } from './serverHandlers/urlHandler';
const server = setupServer(...urlHandler);
export { server, rest }