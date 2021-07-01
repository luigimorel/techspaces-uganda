import { render, screen } from '@testing-library/react';
import OSSContent from '../../../components/content/OSSContent';

test('renders the OSS  content page', () => {
    render(<OSSContent />);
    screen.debug();
});
