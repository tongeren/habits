import capitalize from './capitalize';

const TEST_CASES = [
    ['dragon', 'Dragon'],
    ['dRagoN', 'Dragon'],
    ['Dragon', 'Dragon'],
    ['DRAGON', 'Dragon']
]

describe('capitalize', () => {
    TEST_CASES.map(testCase => {
        const strIn = testCase[0];
        const strOut = testCase[1];
        test(`it will map ${strIn} to ${strOut}`, () => {
            expect(capitalize(strIn)).toEqual(strOut);
        });
        return 0;
    }); 
});

