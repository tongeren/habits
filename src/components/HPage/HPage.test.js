import { render, screen } from '@testing-library/react';
import ProviderWrapper from '../../helpers/ProviderWrapper';
import HPage from './HPage';

describe('<HPage />', () => {
    test(`if the status is 'home', then it always renders an <HHero />`, () => {
        render(
            <ProviderWrapper>
                <HPage status="home" /> 
            </ProviderWrapper>
        );
        const linkElement = screen.getByTestId('HHero');
        expect(linkElement).toBeInTheDocument();
    });

    test(`if the status is 'signup', then it always renders an <HSignUp />`, () => {
        render(
            <ProviderWrapper>
                <HPage status="signup" /> 
            </ProviderWrapper>
        );
        const linkElement = screen.getByTestId('HSignUp');
        expect(linkElement).toBeInTheDocument();
    });

    test(`if the status is 'login', then it always renders an <HLogIn />`, () => {
        render(
            <ProviderWrapper>
                <HPage status="login" /> 
            </ProviderWrapper>
        );
        const linkElement = screen.getByTestId('HLogIn');
        expect(linkElement).toBeInTheDocument();
    });

});