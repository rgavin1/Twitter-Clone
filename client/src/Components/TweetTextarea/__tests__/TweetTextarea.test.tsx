import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import TwitterTextarea from '../index';
import { postServices } from '../../../services/posts'
import { act } from 'react-dom/test-utils';

describe('<TweetTextArea />', () => {
    // mocked service
    const spyOnCreateSinglePost = jest.spyOn(postServices, "createSinglePost");

    // render component
    const renderTweetTextArea = async () => {
        render(<TwitterTextarea />)
    };

    // element functions
    const sendTweetButton = () => screen.getByRole("button", { name: /Tweet/i });
    const tweetTextArea = () => screen.getByPlaceholderText("What's happening?");

    afterAll(() => spyOnCreateSinglePost.mockRestore())
    describe('Happy path', () => {
        it("confirm post tweet button is disabled", async () => {
            // arrange
            await renderTweetTextArea();
            // act
            const send = sendTweetButton();
            // assert
            expect(send).toBeDefined()
        })
        it("sends a tweet", async () => {
            // arrange
            const givenMessage = "This is a test post";
            await renderTweetTextArea();
            const textarea = tweetTextArea();
            const send = sendTweetButton();
            // act
            userEvent.type(textarea, givenMessage)
            // note - do not wrap userEvent in act
            userEvent.click(send)
            // assert
            await waitFor(() => expect(textarea).not.toHaveValue(givenMessage))
            expect(spyOnCreateSinglePost).toBeCalled()
            expect(spyOnCreateSinglePost).toBeCalledWith(givenMessage)
        })
        it("successfully clear textarea after posting tweet", async () => {
            // arrange
            const givenMessage = "This is a test post";
            await renderTweetTextArea();
            const textarea = tweetTextArea();
            const send = sendTweetButton();
            // act
            userEvent.type(textarea, givenMessage)
            userEvent.click(send)
            // assert
            await waitFor(() => expect(textarea).not.toHaveValue(givenMessage))
            expect(spyOnCreateSinglePost).toBeCalled()
        })
    })
})