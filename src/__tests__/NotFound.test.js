import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('NotFound', () => {
  it('renders the "Not Found" image with correct attributes', () => {
    const { getByAltText } = render(<NotFound />);
    const imageElement = getByAltText('Not Found');

    // Assert that the image element is present in the document
    expect(imageElement).toBeInTheDocument();

    // Assert that the image source is set correctly
    expect(imageElement.src).toContain('not-found.jpg');

    // Assert that the image has the correct alternative text
    expect(imageElement.alt).toBe('Not Found');

    // Assert that the image is visible on the page
    expect(imageElement).toBeVisible();
  });
});
