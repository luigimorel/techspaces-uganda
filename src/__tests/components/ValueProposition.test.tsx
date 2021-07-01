import { render, screen } from '@testing-library/react';
import ValueProposition from '../../components/ValueProposition';

test('render the <ValueProposition/> component', () => {
    render(<ValueProposition />);
    screen.debug();

    const docsText = screen.getByText(/docs/i);
    expect(docsText).toBeInTheDocument();

    const tools = screen.getByText(/tools/i);
    expect(tools).toBeInTheDocument();

    const startUps = screen.getByText(/start-ups/i);
    expect(startUps).toBeInTheDocument();
});
