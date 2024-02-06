const bookmarkBtn = document.querySelectorAll(".bookmar");
const bookmerketSection = document.querySelector(".bookmarket-data")

const Bookmark = Array.from(bookmarkBtn);

let arr = []

const handleClick = (event) => {
    const conta = event.target.parentElement.parentElement;

    const author = conta.querySelector(".author").textContent;
    const title = conta.querySelector(".title").textContent;
    // const date =conta.querySelector("date").textContent

    arr.push({ author, title })
    console.log(arr);

    localStorage.setItem("bookmarkData", JSON.stringify(arr));
};

const data = Bookmark.map((bookmarkedBtn) => {
    bookmarkedBtn.addEventListener("click", handleClick)
});

const getLocalData = JSON.parse(localStorage.getItem("bookmarkData"));

getLocalData?.map((bookmarkedData, index) => {
    console.log(index, "bookmarInde");
    bookmerketSection.innerHTML += `
      <div class="davvBox" >
        <div>
          <h2>${bookmarkedData.title}</h2>
          <h3>${bookmarkedData.author}</h3>
        </div>
        <div>
          <button class="opn">Open</button>
          <button class="delete">Del</button>
        </div>
      </div>
      `
    const deleteBtn = bookmerketSection.querySelectorAll(".delete")
    const deleteButton = Array.from(deleteBtn);

    deleteButton?.map((btn, btnIndex) => {
        console.log(btnIndex, "clicked");
        btn.addEventListener("click", (e) => { });
    });
});


// const inputValue = document.getElementById("searchBook");
// const counterName = document.querySelector(".author")
// const title =document.querySelector(".title")
// const date =document.querySelector(".date")
// const BASE_URL= {
//     api:"https://openlibrary.org/people/mekBot/books/currently-reading.json",
//     api_key:"cd2400fa7444fc0dbc10dac6d40bf20c",
//     units:"metric"

// }
// console.log(title);



// const handleSearchInput = e=>{
//     const inputVal=e.target.value

//     setTimeout(()=>{
//         fetch("https://openlibrary.org/people/mekBot/books/currently-reading.json")
//         .then(res=>res.json()).then(data=>{
//             console.log(data);
           
//             counterName.textContent =data.reading_log_entries[0].work.author_names;
//             title.textContent=data.reading_log_entries[0].work.title;
//             date.textContent=data.reading_log_entries[0].work.title;
//         })  
//     },500)
// }

// inputValue.addEventListener("input", handleSearchInput);


const BASE_URL = "https://openlibrary.org/people/mekBot/books";
const row = document.querySelector(".regHonBox");

const fetchData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/currently-reading.json`);
    if (!res.ok) throw new Error(`Could not fetch data from ${BASE_URL}`);
    return res.json();
  } catch (error) {
    console.error(error.message);
  }
};

const createCard = () => {
  fetchData().then((books) => {
    const bookList = books.reading_log_entries;
    bookList.forEach((book) => {
      console.log(book.work);
      const data = book.work;
      const col = document.createElement('div');
      col.classList = "mb-5 col-3";
      
      col.innerHTML = `
        <div class="honBox-3">
          <img class="bookkk" src="./bookmark/img/book6.jpeg" alt="book">
          <h2 class="title">${data.title}</h2>
          <p>Author: <span class="author">${data.first_publish_year}</span></p>
          <p> Data <span class="date">${data.author_names[0]}</span></p>
          <div>
            <button class="bookmar">Bookmark</button>
            <button class="more">More Info</button>
            <button class="readd">Read</button>
          </div>
        </div>
      `;
      
      row.appendChild(col);
    });
  });
};

createCard();