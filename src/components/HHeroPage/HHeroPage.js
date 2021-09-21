import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import HHero from '../HHero/HHero';

const HERO_TITLE = "Form habits that stick";
const HERO_SUBTITLE = "Use proven methods to finally REACH your goals";

const HHeroPage = () => {
    const dispatch = useDispatch();

    const buttonClickHandler = () => {
        dispatch(authActions.showSignUp());
    };

    return (
        <HHero 
            imgSrc="./pushups_morning.jpg" 
            imgAlt="hero" 
            title={ HERO_TITLE }
            subtitle={ HERO_SUBTITLE }
            ctaButtonClickHandler={ buttonClickHandler }
        />
    );
};


export default HHeroPage;
