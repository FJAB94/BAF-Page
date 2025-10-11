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

/* ----- Logo ----- */

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

/* ----- Contact Form ----- */
((d) => {
	const $form = d.querySelector(".contact-form"),
		$response = d.querySelector(".contact-form-response");

		const $loader = d.querySelector(".contact-form-loader");

	$form.addEventListener("submit", (e) => {
		e.preventDefault();
		$loader.classList.remove("none");
		/* ----- Codigo de Jon ----- */
		/* fetch("http://formsubmit.co/francoaguilar94.fa@gmail.com", {
			method: "POST",
			headers: {
				Accept: "application/json",
			},
			body: new FormData(e.target),
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((json) => {
				console.log(json);
				location.hash = "#gracias";
				$form.reset();
			})
			.catch((err) => {
				console.log(err);
				let message =
					err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
				$response.querySelector(
					"h3"
				).innerHTML = `Error ${err.status}: ${message}`;
				location.hash = "#gracias";
			})
			.finally(() => {
				$loader.classList.add("none");
				setTimeout(() => {
					location.hash = "#close";
				}, 3000);
			}); */
			/* ----- Codigo Copilot ------ */
		fetch("https://formsubmit.co/francoaguilar94.fa@gmail.com", {
			method: "POST",
			headers: {
				Accept: "application/json",
			},
			body: new FormData(e.target),
		})
			.then((res) => {
				if (res.ok) {
					location.hash = "#gracias";
					$form.reset();
				} else {
					throw res;
				}
			})
			.catch((err) => {
				console.log(err);
				let message =
					err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
				$response.querySelector(
					"h3"
				).innerHTML = `Error ${err.status}: ${message}`;
				location.hash = "#gracias";
			})
			.finally(() => {
				$loader.classList.add("none");
				setTimeout(() => {
					location.hash = "#close";
				}, 4000);
			});
	});
})(document);

/* ----- Validation Form ----- */
((d)=>{
	const $form = d.querySelector(".contact-form"),
		$inputs = d.querySelectorAll(".contact-form [required]");

	$inputs.forEach((input) => {
		const $span = d.createElement("span");
		$span.id = input.name;
		$span.textContent = input.title;
		$span.classList.add("contact-form-error","none");
		input.insertAdjacentElement("afterend", $span);
	});

	d.addEventListener("keyup", (e) => {
		if (e.target.matches(".contact-form [required]")) {
			let $input = e.target,
				pattern = $input.pattern || $input.dataset.pattern;
			if (pattern && $input.value !== "") {
				let regex = new RegExp(pattern);
				return !regex.exec($input.value)
					? d.getElementById($input.name).classList.add("is-active")
					: d.getElementById($input.name).classList.remove("is-active");
			}
			if (!pattern) {
				return $input.value === ""
					? d.getElementById($input.name).classList.add("is-active")
					: d.getElementById($input.name).classList.remove("is-active");
			}
		}
	});
})(document);