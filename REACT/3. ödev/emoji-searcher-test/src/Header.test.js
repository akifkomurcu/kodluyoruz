import {render,screen} from '@testing-library/react';
//render ile component render ediliyor

//screen ile o an domda olan nesneyi yakalayabilmiş
import Header from './Header';
// import userEvent from '@testing-library/user-event'

describe('desc', () => {
    let HeaderText;
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Header />)
        HeaderText=screen.getByText("Emoji Search")
    })

    test('Header Render ediliyor mu', () => {
        expect(HeaderText).toBeInTheDocument()
        console.log("header domda")
    })
    
})