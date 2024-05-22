
////////////////
const argentinaSectionBtn = document.querySelectorAll(".argentina-section-btn");
const usaSectionBtn = document.querySelectorAll(".usa-section-btn");
const japanSectionBtn = document.querySelectorAll(".japan-section-btn");
const canadaSectionBtn = document.querySelectorAll(".canada-section-btn");

argentinaSectionBtn.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = `./pages/section.html?section=Argentina`;
    });
});
usaSectionBtn.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = `./pages/section.html?section=USA`;
    });
});
japanSectionBtn.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = `./pages/section.html?section=Japan`;
    });
});
canadaSectionBtn.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = `./pages/section.html?section=Canada`;
    });
});

/////////////////////////
const bestPostContainer = document.querySelector("#best-post-container");
function loadBestPost() {
    fetch("../posts.json")
        .then(res => res.json())
        .then(data => {
            const bestPost = data.find(bp => bp.recomended === true);
            if (bestPost) {
                const div = document.createElement("div");
                div.classList.add("post-content")
                div.innerHTML = `
                    <img src="${bestPost.img}" alt="${bestPost.title}">
                    <div class="best-post-content">
                        <h2>${bestPost.title}</h2>
                        <p>${bestPost.preview}</p>
                        <button data-title="${bestPost.title}">
                            Read more
                        </button>
                    </div>
                `;
                bestPostContainer.append(div);

                const readMoreButton = div.querySelector("button");
                readMoreButton.addEventListener("click", () => {
                    window.location.href = `./pages/post.html?title=${bestPost.title}`;
                });
            }
        });
}
loadBestPost();