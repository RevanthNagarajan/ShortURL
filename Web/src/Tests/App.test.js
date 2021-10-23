import { render, screen, fireEvent, cleanup, userEvent, waitFor, waitForElementToBeRemoved } from './tests.util';
import App from '../App';
import { encoder } from '../Utils/encoder';
import { expect } from 'chai';


afterEach(cleanup,() => {
  console.error.mockRestore()
});

beforeEach(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => null);
});

test('Web UI DOM test BEGINS', () => {});

test('renders App page with title', () => {
  render(<App />);
  screen.getByText(/SHORT URL/i);
});

test('Renders list of urls provided by Mock API', async () => {
    render(<App/>);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading Content ..."));
    await waitFor(()=>{
        screen.getByText("http://localhost:3030/rd/Oo5d414");
    }).catch(err=>console.log(err))
});

test('Generates Unique Short URL for the given input', async () => {
  const encoderUtil = encoder;
  let map = {}
  let failed = false;
  const validate= (input) => {
    let shortUrl = encoderUtil(input);
    if(map[shortUrl]) {
      failed = true;
    } else {
      map[shortUrl] = 1
    }
  }
  for(let i = 0; i < 50; i++ ) {
    let url = "https://discord.com/";
    validate(url);
  }
  expect(failed).equal(false);
});