import { render, screen } from '@testing-library/react';
import ProviderWrapper from '../../helpers/ProviderWrapper';
import HMenu from './HMenu';

describe('<HMenu />', () => {

    beforeEach(() => {
        const mockAnchorEl = document.createElement("button");
        render(
            <ProviderWrapper>
                <HMenu 
                    open={ true } 
                    anchorElement={ mockAnchorEl } 
                    closeHandler={ jest.fn }/>
            </ProviderWrapper>
        );
    });

    test('always renders an <Menu />', () => {
        const linkElement = screen.getByTestId('HMenu');
        expect(linkElement).toBeInTheDocument();
    });

    

});

