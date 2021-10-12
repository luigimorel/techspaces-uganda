import { render, screen } from '@testing-library/react';
import CommunitiesContent from '../../../components/content/ComunitiesContent';

test('renders the communities content page', () => {
    render(<CommunitiesContent />);
    screen.debug();
});
