import { render, screen } from '@testing-library/react';
import ProviderWrapper from '../../helpers/ProviderWrapper';
import HSignUp from './HSignUp';

describe('<HSignUp />', () => {
    test('it always renders a container', () => {
        render(
            <ProviderWrapper>
                <HSignUp />
            </ProviderWrapper>
        )
        const linkElement = screen.getByTestId('HSignUp');
        expect(linkElement).toBeInTheDocument();
    });
});


