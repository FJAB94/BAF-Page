/* ----- Menu ----- */
((d) => {
	const $btnMenu = d.querySelector(".menu-btn"),
		$menu = d.querySelector(".menu");

	$btnMenu.addEventListener("click", (e) => {
		$btnMenu.firstElementChild.classList.toggle("none");
		$btnMenu.lastElementChild.classList.toggle("none");
		$menu.classList.toggle("is-active");
	});

	d.addEventListener("click", (e) => {
		if (!e.target.matches(".menu a")) return false;
		$btnMenu.firstElementChild.classList.remove("none");
		$btnMenu.lastElementChild.classList.add("none");
		$menu.classList.remove("is-active");
	});
})(document);

((d) => {
	const imagen = document.getElementById("logo_fab");

	imagen.addEventListener("mouseover", () => {
		imagen.classList.add("transition");
		imagen.classList.add("opacity");
		imagen.classList.add("scale");
		imagen.src = "../assets/logo_baf_hover.png";
	});

	imagen.addEventListener("mouseout", () => {
		imagen.classList.remove("opacity");
		imagen.classList.remove("scale");
		imagen.src = "../assets/logo_baf.png";
	});
})(document);
