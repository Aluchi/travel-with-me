const postContent = document.querySelector("#post-content");

function getPostTitleFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('title');
}

// Function to load the post content
function loadPost() {
    const postTitle = getPostTitleFromUrl();
    if (!postTitle) {
        document.querySelector('#post-content').innerText = 'Post not found.';
        return;
    }

    fetch("https://raw.githubusercontent.com/Aluchi/travel-with-me/master/posts.json")
        .then(res => res.json())
        .then(data => {
            const post = data.find(p => p.title === postTitle);
            if (post) {
                document.querySelector('#post-content').innerHTML = `
                <div class="post-page-header">
                    <div class="post-page-title">
                        <span>${post.datetime}</span>
                        <h2>${post.title}</h2>
                    </div>

                    <img class="post-page-img" src="${post.img}" alt="${post.title}">
                </div>
                ${post.content}
                `;
            } else {
                document.querySelector('#post-content').innerText = 'Post not found.';
            }
        });
}

// Load the post when the page is loaded
window.onload = loadPost;