
import { useState, useEffect } from 'react';
import { getNotes, deleteNote } from '../api';
import NoteItem from './NoteItem';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const response = await getNotes();
        setNotes(response.data);
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        fetchNotes();
    };

    return (
        <div>
            {notes.map(note => (
                <NoteItem key={note.id} note={note} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default NoteList;
