const createRoomButton = document.querySelector(".create-room__button");
const enterRoomButton = document.querySelector(".enter-room__button");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const body = document.body;

createRoomButton.addEventListener("click", () => {
	openPopup(popup1);
});

enterRoomButton.addEventListener("click", () => {
	openPopup(popup2);
});

function openPopup(currentPopup) {
	currentPopup.classList.toggle("open");
	currentPopup.addEventListener('click', (e) => {
		if (!e.target.closest('.popup__content')) {
			closePopup(currentPopup);
		}
	});
}

function closePopup(currentPopup) {
	currentPopup.classList.remove('open');
}