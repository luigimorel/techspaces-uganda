import { render, screen } from '@testing-library/react';
import ResourcesContent from '../../../components/content/ResourcesContent';

test('renders the resources content page', () => {
    render(<ResourcesContent />);
    screen.debug();
});
