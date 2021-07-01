import { render, screen } from '@testing-library/react';
import Reasons from '../../components/Reasons';

test('render the Reasons component  ', () => {
    render(<Reasons />);

    const whyText = screen.getByText(/why techspaces uganda/i);
    expect(whyText).toBeInTheDocument();

    const collaboText = screen.getByTestId('collabo');
    expect(collaboText).toBeInTheDocument();

    const growthText = screen.getByText(/growth/i);
    expect(growthText).toBeInTheDocument();
});
