import { render, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
        await act(async () => { await render(<App />) })
    }
    // function to find elements
    const submitATweetButton = () => screen.getByRole("button", { name: /Tweet/i });
    const inputElement = () => screen.getByPlaceholderText("What's happening?");

    describe('<TwitterBox />', () => {
        it("confirms tweet button disabled by default", async () => {
            // Arrange
            await renderTwitterApplication();
            // Assert
            expect(inputElement()).not.toHaveValue();
            expect(submitATweetButton().getAttribute("aria-disabled")).toBe("true");
        });

        it("should enable submit button when input has text", async () => {
            // Arrange
            const expectedTweet = "this is my first post";
            await renderTwitterApplication()
            const input = inputElement();
            const sendTweetButton = submitATweetButton();
            // Act
            userEvent.type(input, expectedTweet);
            // Assert
            expect(input).toHaveValue(expectedTweet);
            expect(sendTweetButton.getAttribute("aria-disabled")).toBe("false");
        })

        it("confirms the input element and twitter is set to back to default", async () => {
            // Arrange
            const expectedTweet = "this is my first post{selectall}{del}";
            await renderTwitterApplication()
            const input = inputElement();
            const sendTweetButton = submitATweetButton();
            // Act
            userEvent.type(input, expectedTweet);
            // Assert
            expect(input).not.toHaveValue(expectedTweet);
            expect(sendTweetButton.getAttribute("aria-disabled")).toBe("true");
        })
    })

    describe("<Feed />", () => {
        it("first test", async () => {
            await renderTwitterApplication()
            expect(true).toBe(true)
        })
    })
})