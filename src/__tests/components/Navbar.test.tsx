import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';

test('render page text', () => {
    render(<Navbar />);
    const imgAltText = screen.getByAltText(/techspaces uganda/i);
    expect(imgAltText).toBeInTheDocument();

    const openData = screen.getByText(/open data/i);
    expect(openData).toBeInTheDocument();

    const oss = screen.getByText(/open source projects/i);
    expect(oss).toBeInTheDocument();

    const navbarOpen = screen.getByTestId('nav-open');
    fireEvent.click(navbarOpen);
    expect(navbarOpen).toBeTruthy();
});
