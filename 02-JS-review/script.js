const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

///////////////////
// Destructuring //
///////////////////
/*
const book = getBook(3);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

///////////////////
// Rest / Spread //
///////////////////

const [primaryGenre, secondaryGenre, ...remainingGenres] = genres;
console.log(primaryGenre, secondaryGenre, remainingGenres);

const newGenres = [...genres, 'epic fantasy'];
console.log(newGenres);

const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: '2001-12-19',
  // overwriting an existing property
  // pages: 1210,
};
console.log(updatedBook);

/////////////////////
// Arrow Functions //
/////////////////////

const pubDate = (str) => str.split('-')[0];
console.log(pubDate(book.publicationDate));
console.log(pubDate(publicationDate));

function pubDate2(str) {
  return str.split('-')[0];
}
console.log(pubDate2(publicationDate));

///////////////////////
// Template Literals //
///////////////////////

const summary = `${title} is a ${pages}-page long book written by ${author} in ${pubDate(
  publicationDate
)}. The book ${hasMovieAdaptation ? 'has' : 'has not'} been made into a movie`;
console.log(summary);

/////////////
// Ternary //
/////////////

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than a thousand';
console.log(` The book has ${pagesRange} pages.`);

//////////////////////
// Short Circuiting //
//////////////////////

// && when first value is false -> it returns
console.log(true && 'Something');
console.log(false && 'Something');
console.log(hasMovieAdaptation && 'This book has a movie');

// falsy: 0, "", null, undefined
console.log('jonas' && 0);
console.log(0 && 'jonas');

// || when first value is true -> it returns
console.log('jonas' || 0);
console.log(null || 'jonas');

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
console.log(spanishTranslation);

// ?? when values is falsy but you need it -> returns the value
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || 'no data';
// console.log(countWrong);

///////////////////////
// Optional Chaining //
///////////////////////

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  // reviewCount may be undefined. If it is, you can then also use nullish coelescence
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return librarything + goodreads;
}

console.log(getTotalReviewCount(book));

// if the book doesn't have an attribute such as librarything


/////////
// Map //
/////////

const books = getBooks();

const titles = books.map((book) => book.title);
titles;

const essentialBookInfo = books.map((book) => ({
  author: book.author,
  title: book.title,
}));
console.log(essentialBookInfo);

////////////
// Filter //
////////////

const longBooks = books.filter((book) => book.pages > 1000);
console.log(longBooks);

const startsWithThe = books
  .filter((book) => book.title.startsWith('The'))
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => `${book.title} written by ${book.author}`);

console.log(startsWithThe);

const adventureBooks = books
  .filter((book) => !book.genres.includes('adventure'))
  .map((book) => book.title);
console.log(adventureBooks);

////////////
// Reduce //
////////////

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

//////////
// Sort //
//////////

const x = [3, 7, 1, 3, 4];
// slice to make a copy as sort mutates the original array
const sorted = x.slice().sort((a, b) => a - b);
console.log(sorted);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

///////////////////////////////////
// Working with Immutable Arrays //
///////////////////////////////////

// 1) add elements without changing the original array
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K Rowling',
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2) delete elements without changing the original array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3) update element while in the original array
const bookUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);

console.log(bookUpdate);
*/

//////////////
// Promises //
//////////////

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data));

///////////////////
// Async / Await //
///////////////////

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
}
getTodos();
