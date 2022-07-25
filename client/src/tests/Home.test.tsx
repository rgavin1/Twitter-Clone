import { render, act, screen } from '@testing-library/react';
import App from '../App';

/**
 * Best Practice for test
 * 
 * - Test Block
 *   - Render a Component we want to test
 *   - Find elements we want to interact with
 *   - Interact with those elements
 *   - Assert that the results are as expected
 * 
 * - Describe Block:
 *   - Used to group common tests
 */
describe('<TwitterClone />', () => {
    // render component
    const renderTwitterApplication = async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await render(<App />);
        })
    }

    describe('<TwitterBox />', () => {
        it("should enable submit button when input has text", async () => {
            await renderTwitterApplication()

            screen.debug(undefined, Infinity);

            expect(true).toBe(true)
        })
    })

    describe("<Feed />", () => {
        it("first test", async () => {
            await renderTwitterApplication()
            expect(true).toBe(true)
        })
    })
})