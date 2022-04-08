/* eslint-disable testing-library/no-render-in-setup */
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'
//render ile component render ediliyor
import userEvent from "@testing-library/user-event";
//screen ile o an domda olan nesneyi yakalayabilmiş
// import EmojiResults from './EmojiResults'
import App from "./App";
// import userEvent from '@testing-library/user-event'

describe('desc', () => {
    let buttons, input;
    beforeEach(() => {
     
        render(<App />);
        buttons = screen.getAllByText("Click to copy emoji");
        input = screen.getByPlaceholderText('Text')
      });
      test("Emoji listesi renderlandı mı?", () => {
          //20 adet emoji olduğu için 
        expect(buttons.length).toEqual(20);
        console.log("emoji list renderlandı")
      });
      test("inputa girdiğimiz değerle domda emoji rerender oldu", () => {
        const inputValue = "Wink";
        userEvent.type(input, inputValue);
        const emoji = screen.getByText(inputValue);
        expect(emoji).toBeInTheDocument();
      });

      test("Emoji must be copied when clicked", () => {
        expect(buttons[0]).toHaveAttribute("data-clipboard-text");
      });
      
})