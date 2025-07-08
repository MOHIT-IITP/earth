import React, { useState } from 'react'

const mockNotes = [
  { id: 1, title: 'First Note', content: 'This is the content of the first note.' },
  { id: 2, title: 'Second Note', content: 'Here is some more content for the second note.' },
  { id: 3, title: 'Third Note', content: 'Third note content goes here.' },
]

const NotesSidebar = () => {
  const [notes, setNotes] = useState(mockNotes)
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(notes[0]?.id || null)

  const handleSelectNote = (id: number) => {
    setSelectedNoteId(id)
  }

  const handleNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: `Untitled Note`,
      content: 'Start writing your note here...',
    }
    setNotes([newNote, ...notes])
    setSelectedNoteId(newNote.id)
  }

  const selectedNote = notes.find(note => note.id === selectedNoteId)

  return (
    <div className="flex h-[80vh] w-full" style={{ minHeight: '500px' }}>
      {/* Sidebar */}
      <div className="flex flex-col p-4 h-full border-r border-gray-700" style={{ width: '20%' }}>
        <button
          className="mb-4 flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all duration-200"
          onClick={handleNewNote}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          New Note
        </button>
        <hr className="border-gray-700 mb-4" />
        <div className="flex-1 overflow-y-auto">
          {notes.length === 0 && (
            <div className="text-gray-400 text-sm text-center mt-8">No notes yet.</div>
          )}
          {notes.map(note => (
            <button
              key={note.id}
              onClick={() => handleSelectNote(note.id)}
              className={`w-full text-left px-3 py-2 rounded-lg mb-2 transition ${
                selectedNoteId === note.id
                  ? ' bg-blue-900 font-bold'
                  : 'hover:bg-gray-800'
              }`}
            >
              {note.title}
            </button>
          ))}
        </div>
      </div>
      {/* Note Content */}
      <div className="p-6 flex-1 overflow-y-auto" style={{ width: '80%' }}>
        {selectedNote ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedNote.title}</h2>
            <div className="text-gray-200 whitespace-pre-line">{selectedNote.content}</div>
          </div>
        ) : (
          <div className="text-gray-400 text-lg text-center mt-20">Select a note to view its content.</div>
        )}
      </div>
    </div>
  )
}

export default NotesSidebar