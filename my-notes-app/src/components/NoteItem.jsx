import PropTypes from 'prop-types';

const NoteItem = ({ note, onDelete }) => {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
};
NoteItem.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
