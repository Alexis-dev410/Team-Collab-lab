import { render, screen } from '@testing-library/react';
import NotesPageLoggedOutView from './NotesPageLoggedOutView';

test('explains how new and returning users can access their notes', () => {
    render(<NotesPageLoggedOutView />);
    expect(screen.getByRole('heading', { level: 1, name: "Your notes, together" }))
        .toBeInTheDocument();
    expect(screen.getByText('New here? Choose Sign Up in the navigation.'))
        .toBeInTheDocument();
    expect(screen.getByText('Already have an account? Choose Log In in the navigation.'))
        .toBeInTheDocument();
    expect(screen.getByText('You must sign in to view your notes.'))
        .toBeInTheDocument();
});