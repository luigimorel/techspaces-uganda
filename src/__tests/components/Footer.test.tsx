import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

test('render page text', () => {
    render(<Footer />);
    const imgAltText = screen.getByAltText(/techspaces uganda logo/i);
    expect(imgAltText).toBeInTheDocument();

    const openData = screen.getByText(/open data/i);
    expect(openData).toBeInTheDocument();

    const authorName = screen.getByText(/luigi morel/i);
    expect(authorName).toBeInTheDocument();
});
