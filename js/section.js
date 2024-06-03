const blogArticlesInSectionPage = document.querySelector("#specific-posts-container");

function loadSectionBlog() {
    const section = getSectionFromUrl();

    fetch("https://raw.githubusercontent.com/Aluchi/travel-with-me/master/posts.json")
        .then((res) => res.json())
        .then((data) => {
            const filteredPosts = data.filter(post => post.section === section);
            filteredPosts.forEach(post => {
                const article = document.createElement("article");
                article.innerHTML = `
                    <div class="inside-article">
                        <div class="post-image">
                            <button class="post-button" data-title="${post.title}"><img src="${post.img}" alt="${post.title}"></button>
                        </div>
                        <div class="entry-header">
                            <div class="entry-meta">
                                <span class="posted-on">
                                    <time datetime="2020-12-01">2020-12-01</time>
                                </span>
                            </div>
                            <button class="entry-title-container post-button" data-title="${post.title}"><h2 class="entry-title">${post.title}</h2></button>
                        </div>
                        <div class="entry-summary">
                            ${post.preview}
                            <button class="read-more-two post-button" data-title="${post.title}">Read more</button>
                        </div>            
                    </div>
                    `;
                blogArticlesInSectionPage.append(article);
            });
            document.querySelectorAll('.post-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const postTitle = e.target.closest('.post-button').dataset.title;
                    window.location.href = `post.html?title=${postTitle}`;
                });
            });
        });
}

function getSectionFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('section');
}

loadSectionBlog();