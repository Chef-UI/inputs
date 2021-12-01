import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Template from './component';

const template = (props = {}) => <Template {...props} />;

describe('Template', () => {
    it('should render title', () => {
        const { getByText } = render(template());
        expect(getByText('Template component').textContent).toBeTruthy();
    });

    describe('subtitle', () => {
        it('should NOT render when false', () => {
            const { queryByText } = render(template({ subtitle: false }));
            expect(queryByText('Template component is cool!')).toBeNull();
        });

        it('should render when true', () => {
            const { getByText } = render(template({ subtitle: true }));
            expect(getByText('Template component is cool!').textContent).toBeTruthy();
        });
    });
})