const postContainer = document.getElementById('post-container');
const loader = document.querySelector('.loader');
const filter = document.querySelector('#filter');

let limit = 3;
let page = 1;

async function getPosts() {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await response.json();

  return data;
}

// Fetch posts from API
async function showPosts() {
  const posts = await getPosts();
  posts.map((post) => {
    const postElem = document.createElement('div');
    postElem.classList.add('post');
    postElem.innerHTML = `

    <div class="number">${post.id}</div>
    <div class="post-info">
      <h2 class="post-title">${[post.title]}</h2>
      <p class="post-body">
        ${post.body}
      </p>
    </div>
  `;
    postContainer.appendChild(postElem);
  });
}

//show initial posts
showPosts();
