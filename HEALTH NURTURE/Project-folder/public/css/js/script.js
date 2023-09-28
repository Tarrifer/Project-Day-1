// Sample article data
const sampleArticles = [
    {
        title: "Article 1",
        image: "/images/article1.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "top-stories"
    },
    {
        title: "Article 2",
        image: "/images/article2.jpg",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "health-facts"
    },
    {
        title: "Article 3",
        image: "/images/article3.jpg",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        category: "health-news"
    }
];

// Function to display articles in a container
function displayArticles(articles, containerId) {
    const container = document.getElementById(containerId);

    articles.forEach((article, index) => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
        articleDiv.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h4>${article.title}</h4>
            <p>${article.content}</p>
        `;
        container.appendChild(articleDiv);
    });
}

// Display sample articles in respective containers
displayArticles(sampleArticles.filter(article => article.category === "top-stories"), "top-stories-container");
displayArticles(sampleArticles.filter(article => article.category === "health-facts"), "health-facts-container");
displayArticles(sampleArticles.filter(article => article.category === "health-news"), "health-news-container");