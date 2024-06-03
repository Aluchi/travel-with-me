const blogArticlesInBlogPage = document.querySelector("#blog-articles");

function loadBlog() {
    fetch("https://raw.githubusercontent.com/Aluchi/travel-with-me/master/posts.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const posts = data;
            posts.forEach(post => {
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
                blogArticlesInBlogPage.append(article);
            });
            document.querySelectorAll('.post-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const postTitle = e.target.closest('.post-button').dataset.title;
                    window.location.href = `post.html?title=${postTitle}`;
                });
            });
        })
}
loadBlog();