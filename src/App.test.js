import { render, screen } from '@testing-library/react';
import { authActions } from './store/auth';
import ProviderWrapper from './helpers/ProviderWrapper';

import store from './store/index';
import App, { statusTypes, determineStatus } from './App';

const renderApp = () => render(
  <ProviderWrapper>
    <App />
  </ProviderWrapper>
);

describe('determineStatus', () => {
  test(`determineStatus(false, false, false) must give status ${statusTypes[1]}`, () => {
    const status = determineStatus(false, false, false);
    expect(status).toBe(statusTypes[1]);
  });

  test(`determineStatus(true, false, false) must give status ${statusTypes[2]}`, () => {
    const status = determineStatus(true, false, false);
    expect(status).toBe(statusTypes[2]);
  });

  test(`determineStatus(false, true, false) must give status ${statusTypes[3]}`, () => {
    const status = determineStatus(false, true, false);
    expect(status).toBe(statusTypes[3]);
  });

  test(`determineStatus(false, false, true) must give status ${statusTypes[4]}`, () => {
    const status = determineStatus(false, false, true);
    expect(status).toBe(statusTypes[4]);
  });

});

describe('<App />', () => {

  beforeEach(() => {
    renderApp();
  });

  afterEach(() => {
    store.dispatch(authActions.reset());
  })

  test('always renders an <HAppBar />', () => {
    const linkElement = screen.getByTestId('HAppBar');
    expect(linkElement).toBeInTheDocument();
  });

  /*
  test('if showLogIn is true, then it renders a <HLogIn />', () => {
    store.dispatch(authActions.showLogIn);
    renderApp();
    const linkElement = screen.getByTestId('HLogIn');
    expect(linkElement).toBeInTheDocument();
  });

  test(`if showLogIn is false, then doesn't render a <HLogIn />`, () => {
    store.dispatch(authActions.hideLogIn);
    
    const linkElement = screen.getByTestId('HLogIn');
    expect(linkElement).not.toBeInTheDocument();
  });

  test('if showSignUp is true, then it renders a <HSignUp />', () => {
    store.dispatch(authActions.showSignUp);
    
    const linkElement = screen.getByTestId('HSignUp');
    expect(linkElement).toBeInTheDocument();
  });

  test(`if showSignUp is false, then doesn't render a <HSignUp />`, () => {
    store.dispatch(authActions.hideSignUp);
    
    const linkElement = screen.getByTestId('HSignUp');
    expect(linkElement).not.toBeInTheDocument();
  });

  test('if the user is authenticated, then it renders an <HWelcome />', () => {
    store.dispatch(authActions.login()); // authenticate
    
    const linkElement = screen.getByTestId('HWelcome');
    expect(linkElement).toBeInTheDocument();
  });
  */

});
