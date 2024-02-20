const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=8";
const results = document.getElementById("results");
const search = document.getElementById("searchPosts");

(async (API_URL) => {
  try {
    const fetchPosts = await fetch(API_URL);
    if (!fetchPosts.ok) {
      throw new Error(
        `Error is ${fetchPosts.status} and ${fetchPosts.statusText}`
      );
    }
    const posts = await fetchPosts.json();

    search.addEventListener("input", () => {
      const searchTerm = search.value.toLowerCase();

      const filteredPosts = posts.filter((post) => {
        return post.title.includes(searchTerm);
      });

      showPosts(filteredPosts);
    });

    showPosts(posts);
  } catch (e) {
    console.log(e);
  }
})(API_URL);

function showPosts(posts) {
  results.innerHTML = "";
  posts.map((post) => {
    results.innerHTML += `<span>${post.id}</span>. <span>${post.title}</span> <p>${post.body}</p>`;
  });
}
