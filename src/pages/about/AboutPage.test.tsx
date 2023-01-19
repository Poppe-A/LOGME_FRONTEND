import React from 'react';
import { render, screen } from '@testing-library/react';

import { renderWithHelmet } from '../../utils/test-helpers';

import AboutPage from './AboutPage';

describe('About Page', () => {
    it('should render about page heading', () => {
        // Arrange
        render(renderWithHelmet(<AboutPage />));

        // Act
        const element = screen.getByText('This is the about page', { exact: false });

        // Assert
        expect(element).toBeInTheDocument();
    });
});
