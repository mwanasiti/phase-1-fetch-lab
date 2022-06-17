function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(resp=>resp.json())
  .then(data=>bookName(data))
  
}
function bookName(books){
  books.forEach(book => {
    let li=document.createElement("li")
    let sp=document.createElement("span").innerHTML=book.numberOfPages
    
    // li.innerHTML=book.authors
    li.append(sp)
    document.getElementById("list").appendChild(li)
    console.log(book.numberOfPages)
    


  });
  console.log(books)
}



































function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
