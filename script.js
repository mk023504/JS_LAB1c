const library = [
    {
        title: "The Art of the Start 2.0",
        author: "Guy Kawasak",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "The Story of Success",
        author: "Malcolm Gladwell",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Stephen R. Covey ",
        author: "The 7 Habits of Highly Effective People",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

//  2: Set all read values to true
library.forEach(book => {
    book.status.read = true;
});

//  3:
const { title: firstBook } = library[0];

//  4: Turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);

console.log(firstBook); // "The Art of the Start 2.0"
console.log(libraryJSON); 
