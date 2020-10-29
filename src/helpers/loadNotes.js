import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    console.log("loadNOtes")
    const notesSnap = await db.collection(`${uid}/journal/notes`).get()
    const notes = []

    notesSnap.forEach(childSnap => {
        notes.push({
            id: childSnap.id,
            ...childSnap.data()
        })
    })
    console.log(notes)
    return notes
}