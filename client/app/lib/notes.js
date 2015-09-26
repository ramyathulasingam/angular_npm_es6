let id = 0;
const Notes = () => {
   const notes = [
    {id, content: 'my first note'},
    {id: ++id, content: 'some note'},
    {id: ++id, content: 'Awesome note'},
    {id: ++id, content: 'another note'}
   ];

   // define crud on the notes here
  let getNotes = () => {
    return notes;
  }

  let addNote = (content) => {
    notes.push({ id: ++id, content });
  }

  return {getNotes, addNote};
};

export {Notes}