function readingList(books) {
  let content = document.querySelector("#content");
  // Write your code here...
  let bookHeading = document.createElement("h1");
  bookHeading.innerText = "Book List";
  content.appendChild(bookHeading);
  let unorderedBooks = document.createElement("ul");
  content.appendChild(unorderedBooks);

  books.forEach(bookEl => {
    let bookList = document.createElement("li")
    unorderedBooks.appendChild(bookList);
    let paragraphTitleAndAuthor = document.createElement("p");
    paragraphTitleAndAuthor.innerText = `${bookEl.title} - ${bookEl.author}`;
    bookList.appendChild(paragraphTitleAndAuthor);
    let bookImg = document.createElement("img");
    bookImg.src = bookEl.image;
    bookList.appendChild(bookImg);

    // style green if read the book else red
    if(bookEl.alreadyRead === true) {
      bookList.style.background = "green";
    }else {
      bookList.style.background = "red";
    }

  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    image: "https://miro.medium.com/max/1200/1*Qo27inBKBKY4Q4Pgk5KkbQ.png",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    image: "https://images.penguinrandomhouse.com/cover/9780307476708",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    image: "https://servimg.eyrolles.com/static/media/6224/9780201616224_internet_w290.jpg",
    alreadyRead: true
  }
];

readingList(books);