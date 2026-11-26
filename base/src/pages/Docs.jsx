import { useEffect, useState } from "react";
import { X } from "lucide-react";
import "../styles/docs.scss";

const Docs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  const handleAddNote = (e) => {
    e.preventDefault();

    const trimmedContent = content.trim();
    const trimmedTitle = title.trim();

    if (!trimmedContent) return;

    const newNote = {
      id: crypto.randomUUID(),
      title: trimmedTitle || "Untitled note",
      content: trimmedContent,
      createdAt: new Date().toLocaleDateString(),
    };

    setNotes((currentNotes) => [newNote, ...currentNotes]);
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    if (!activeNote) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveNote(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeNote]);

  return (
    <main className="docs">
      <header className="docs__header">
        <h1 className="docs__heading">My Notes</h1>
        <p className="docs__subheading">Capture your thoughts and ideas.</p>
      </header>

      <form className="docs__form" onSubmit={handleAddNote}>
        <input
          className="docs__title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title (optional)"
          aria-label="Note title"
          maxLength={100}
        />

        <textarea
          className="docs__textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          aria-label="Note content"
          rows={5}
          required
        />

        <div className="docs__form-footer">
          <span className="docs__hint">Your note will appear below.</span>
          <button className="docs__add-button" type="submit" disabled={!content.trim()}>
            Add note
          </button>
        </div>
      </form>

      <section className="docs__notes-section" aria-labelledby="docs-notes-heading">
        <div className="docs__section-heading">
          <h2 id="docs-notes-heading">Your notes</h2>
          <span className="docs__count">{notes.length}</span>
        </div>

        {notes.length === 0 ? (
          <p className="docs__empty">No notes yet. Write your first note above.</p>
        ) : (
          <div className="docs__grid">
            {notes.map((note) => (
              <button
                className="docs__card"
                key={note.id}
                type="button"
                onClick={() => setActiveNote(note)}
                aria-label={`Open note: ${note.title}`}
              >
                <span className="docs__card-title">{note.title}</span>
                <span className="docs__card-content">{note.content}</span>
                <span className="docs__card-date">{note.createdAt}</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {activeNote && (
        <div
          className="docs__modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveNote(null);
          }}
        >
          <section className="docs__modal" role="dialog" aria-modal="true" aria-labelledby="docs-modal-title">
            <div className="docs__modal-header">
              <div>
                <h2 id="docs-modal-title">{activeNote.title}</h2>
                <span className="docs__modal-date">{activeNote.createdAt}</span>
              </div>
              <button
                className="docs__close-button"
                type="button"
                onClick={() => setActiveNote(null)}
                aria-label="Close note"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <p className="docs__modal-content">{activeNote.content}</p>
          </section>
        </div>
      )}
    </main>
  );
};

export default Docs;
