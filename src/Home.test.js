import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import Wrappers from './Wrappers';
import {APP_DETAILS} from './defs/appDetails';


test('renders and updates color', () => {
  render(
  <Wrappers>
    <Home />
  </Wrappers>
  );

  const btnElement = screen.getByText(/change color/i);
  const appTitleElement = screen.getByText(APP_DETAILS.name);
  
  expect(btnElement).toBeInTheDocument();
  expect(appTitleElement).toBeInTheDocument();
  
  console.debug(appTitleElement.style.color);
  expect(appTitleElement).toHaveStyle("color:#fff");

  btnElement.click();
  console.debug(appTitleElement.style.color);

  expect(appTitleElement).toHaveStyle("color:#af7a3b");
});
