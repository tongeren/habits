import isEmail from 'validator/es/lib/isEmail';
import isStrongPassword from 'validator/es/lib/isStrongPassword';

const MIN_PASSWORD_LENGTH = 10;
const MIN_PASSWORD_STRENGTH = 46;

export const isValidEmail = isEmail;

export const isStrongEnoughPassword = input => isStrongPassword(
    input, 
    { 
        minLength: MIN_PASSWORD_LENGTH, 
        minLowercase: 1, 
        minUppercase: 1, 
        minNumbers: 1, 
        minSymbols: 1, 
        returnScore: true, 
        pointsPerUnique: 1, 
        pointsPerRepeat: 0.5, 
        pointsForContainingLower: 10, 
        pointsForContainingUpper: 10, 
        pointsForContainingNumber: 10, 
        pointsForContainingSymbol: 10 
    }
) >= MIN_PASSWORD_STRENGTH;

export const PasswordRequirements = () => (
    <div>
        <p>{ `Your password needs to be at least ${MIN_PASSWORD_LENGTH} long, and contain at least:` }</p>
        <ul>
            <li>One lower case character</li>
            <li>One upper case character</li>
            <li>One number</li>
            <li>One Symbol</li>
        </ul>
    </div>
);
 

