/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Popup } from "../../pages/Popup/Popup";

describe('Popup', () => {
    it(`
        WHEN Popup is rendered
        THEN Popup should render correctly
    `, () => {
        const component = shallow(<Popup />);

        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it(`
        WHEN Popup is rendered
        THEN should be unrecorded
    `, () => {
        render(<Popup />);

        screen.getByRole('button', { name: 'Start Recording' });
    });

    it(`
        GIVEN rendered Popup
        WHEN click to Start Recording button
        THEN should be start recording
    `, async () => {
        render(<Popup />);
        const button = screen.getByRole('button', { name: 'Start Recording' });

        await userEvent.click(button);

        screen.getByRole('button', { name: 'Stop Recording' });
        screen.getByRole('heading', {level: 1, name: 'Recording'});
    });

    it(`
        GIVEN Popup is recording
        WHEN click to Stop Recording button
        THEN should be stop recording
    `, async () => {
        render(<Popup />);
        const startRecordingButton = screen.getByRole('button', { name: 'Start Recording' });
        await userEvent.click(startRecordingButton);

        const stopRecordingButton = screen.getByRole('button', { name: 'Stop Recording' });
        await userEvent.click(stopRecordingButton);

        screen.getByRole('button', { name: 'Start Recording' });
        const recordingText = screen.queryByRole('heading', {level: 1, name: 'Recording'});
        expect(recordingText).not.toBeInTheDocument();
    });
})