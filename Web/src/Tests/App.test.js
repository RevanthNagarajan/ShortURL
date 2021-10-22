import { render, screen, fireEvent, cleanup, userEvent, waitFor, waitForElementToBeRemoved } from './tests.util';
import App from '../App';


afterEach(cleanup);
test('Web UI DOM test BEGINS', () => {});

test('renders App page with title', () => {
  render(<App />);
  const linkElement = screen.getByText(/SHORT URL/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders list of urls provided by Mock API', async () => {
    render(<App/>);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading Content ..."));
    await waitFor(()=>{
        screen.getByText("http://localhost:3030/rd/Oo5d414");
    })
});