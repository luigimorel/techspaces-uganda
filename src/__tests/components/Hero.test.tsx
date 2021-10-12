import { render, screen } from '@testing-library/react';
import Hero from '../../components/Hero';

test('render the page text', () => {
    render(<Hero />);
    const heroBtn = screen.getByTestId('contribute');
    expect(heroBtn).toHaveClass('hero__btn');

    const mainPara = screen.getByText(/bringing to you the information with/i);
    expect(mainPara).toBeInTheDocument();
});

describe('Hero component', () => {
    test('renders Hero component', () => {
        render(<Hero />);
        screen.debug();
    });
});
