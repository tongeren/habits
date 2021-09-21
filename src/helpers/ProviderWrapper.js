import ThemeWrapper from './ThemeWrapper';
import StoreWrapper from './StoreWrapper';

const ProviderWrapper = ({ children }) => (
    <ThemeWrapper>
        <StoreWrapper>
            { children }
        </StoreWrapper>
    </ThemeWrapper>
);

export default ProviderWrapper;