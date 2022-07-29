import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Comment from '../Comment';

describe('<Comment />', () => {
    // mock variable
    const mockShowModal = true;
    // mock function
    const mocktoggleModal = jest.fn();
    // component function 
    const renderCommentComponent = async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(<Comment showModal={mockShowModal} toggleModal={mocktoggleModal} />)
        })
    }
    // dom element functions
    const getAllCloseButtons = () => screen.getAllByRole("button");
    const getModal = () => screen.getByRole("dialog");

    it("confirms modal closed", async () => {
        // arrange
        await renderCommentComponent();
        const [clsBtn] = getAllCloseButtons();
        const modal = getModal();
        // act
        userEvent.click(clsBtn);
        // assert
        expect(clsBtn).toBeInTheDocument();
        expect(modal).toBeInTheDocument();
        expect(mocktoggleModal).toHaveBeenCalled();
    })
    // screen.debug(undefined, Infinity);
    it.todo("verfiy poster name, certification, tag, and time of posting is displayed")
    it.todo("typing enables reply button")
    it.todo("check all import buttons")
    it.todo("Type and delete in modal")
    it.todo("Close and Clear Modal")
    it.todo("Send Posts and Close Modal")
})