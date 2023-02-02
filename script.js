const today = document.querySelector(".today")
const nav = document.querySelector("#myTopNav")

function todaysDate() {
	const date = new Date()
	let d = date.getDate()
	let m = date.getMonth() + 1
	let y = date.getFullYear()
	today.textContent = `${d}.${m}.${y}`
}
function myfunction() {
	if (nav.className === "topnav") {
		nav.className += " responsive"
	}
	else {
		nav.className = "topnav"
	}
}