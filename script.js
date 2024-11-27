function toggleSearchBar() {
    const searchBarContainer = document.getElementById("search-bar-container");
    // Toggle the visibility of the search bar container
    searchBarContainer.classList.toggle("hidden");
}
// JavaScript for Load More functionality
let loadMoreBtn = document.getElementById("load-more-btn");
let allPosts = document.querySelectorAll(".post-card");

let visiblePosts = 10; // Initially show 6 posts
let totalPosts = allPosts.length;

function showMorePosts() {
    for (let i = visiblePosts; i < visiblePosts + 3 && i < totalPosts; i++) {
        allPosts[i].style.display = "block"; // Show 3 more posts
    }
    visiblePosts += 3; // Update the count of visible posts

    // If all posts are shown, hide the "Load More" button
    if (visiblePosts >= totalPosts) {
        loadMoreBtn.style.display = "none";
    }
}

// Initially hide all posts after the first 6
for (let i = 10; i < totalPosts; i++) {
    allPosts[i].style.display = "none"; // Hide posts initially
}

// Event listener for Load More button
loadMoreBtn.addEventListener("click", showMorePosts);
