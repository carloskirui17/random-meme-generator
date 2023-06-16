const generateMemeBtn = document.querySelector(
	".generate-meme-btn"
);

let subreddits = [
	"programmingmemes",
	"AdviceAnimals",
	"MemeEconomy",
	"ComedyCemetry",
	"memes",
]


const memeImage = document.querySelector(".meme-generator .img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
const memeUps = document.querySelector(".meme-ups");
const memeSubreddit = document.querySelector(".meme-subreddit");

const updateDetails = (url, title, author, ups, subreddit) => {
	memeImage.setAttribute("src", url);
	memeTitle.innerHTML = title;
	memeAuthor.innerHTML = `Meme by: ${author}`;
	memeUps.innerHTML = `Ups: ${ups}`
	memeSubreddit.innerHTML = `Subreddit: ${subreddit}`
	// alert
};

const generateMeme = () => {
	fetch(`https://meme-api.com/gimme/${subreddits[Math.floor(Math.random() * subreddits.length)]}`)
		.then((response) => response.json())
		.then((data) => {
			updateDetails(data.url, data.title, data.author, data.ups, data.subreddit);
		});
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();

memeImage.addEventListener('mouseover', () => {
	memeImage.classList.toggle('hovering')
	parent.style.backgroundColor = 'red'
})

memeImage.addEventListener('mouseleave', () => {
	memeImage.classList.remove('hovering')
})

const dot = document.querySelectorAll('.dot')