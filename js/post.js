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

    fetch("../posts.json")
        .then(res => res.json())
        .then(data => {
            const post = data.find(p => p.title === postTitle);
            if (post) {
                document.querySelector('#post-content').innerHTML = `
                    <div class="post-page-title">
                        <span>${post.datetime}</span>
                        <h2>${post.title}</h2>
                    </div>

                    <div class="post-page-img">
                        <img src="${post.img}" alt="${post.title}">
                    </div>

                    <div>
                        ${post.content}
                    </div>
                `;
            } else {
                document.querySelector('#post-content').innerText = 'Post not found.';
            }
        });
}

// Load the post when the page is loaded
window.onload = loadPost;