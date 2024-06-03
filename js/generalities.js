const sidebarPosts = document.querySelector("#sidebar-posts");

function loadSidebarPosts(){
    fetch("https://raw.githubusercontent.com/Aluchi/travel-with-me/master/posts.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const fivePosts = data.slice(0, 4);
        fivePosts.forEach(post => {
            const button = document.createElement("button");
            button.classList.add("sidebar-card");
            button.setAttribute("data-title", post.title);
            button.innerHTML = `
                <img src="${post.img}" alt="${post.title}">
                <div class="sidebar-card-text">
                    <h4>${post.title}</h4>
                    <time datetime="${post.datetime}">${post.datetime}</time>
                </div>
                `;
            sidebarPosts.append(button);
        });
        document.querySelectorAll('.sidebar-card').forEach(button => {
            button.addEventListener('click', (e) => {
                const postTitle = e.target.closest('.sidebar-card').getAttribute('data-title');
                window.location.href = `post.html?title=${postTitle}`;
            });
        })
        
    })
}
loadSidebarPosts();