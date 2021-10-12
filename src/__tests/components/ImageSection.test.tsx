import { render, screen } from '@testing-library/react';
import ImageSection from '../../components/ImageSection';

describe('render the ImageSction component ', () => {
    test('render contents of the image section component    ', () => {
        render(<ImageSection />);
        screen.debug();
    });
});
