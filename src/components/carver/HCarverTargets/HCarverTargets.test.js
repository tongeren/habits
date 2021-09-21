import { render, screen } from '@testing-library/react';
import ProviderWrapper from '../../../helpers/ProviderWrapper';
import HCarverTargets from './HCarverTargets';
import digitToWord from '../../../helpers/digitToWord';

describe('<HCarverTargets />', () => {
    beforeEach(() => {
        render(
            <ProviderWrapper>
                <HCarverTargets /> 
            </ProviderWrapper>
        );
    });

    test('it renders', () => {   
        const linkElement = screen.getByTestId('HCarverTargets');
        expect(linkElement).toBeInTheDocument();
    });

    test('it renders 5 TextFields', () => {
        [1, 2, 3, 4, 5].map(i => {
            const word = digitToWord(i);
            const identifier = "target-" + word;
            const linkElement = screen.getByTestId(identifier);
            expect(linkElement).toBeInTheDocument();
            return 0;
        });
    });
});
