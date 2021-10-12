import { render, screen } from '@testing-library/react';
import OpenDataContent from '../../../components/content/OpenDataContent';

test('renders the open data content page', () => {
    render(<OpenDataContent />);
    screen.debug();
});
