import PropTypes from 'prop-types';
import { useState } from 'react';
import { createNote } from '../api';

const NoteForm = ({ onNoteCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newNote = { title, content };
        await createNote(newNote);
        onNoteCreated();
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Add Note</button>
        </form>
    );
};

NoteForm.propTypes = {
    onNoteCreated: PropTypes.func.isRequired,
};

export default NoteForm;
