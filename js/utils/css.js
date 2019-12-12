class CSS {
	static style(css, html) {
		for (let [attr, value] of Object.entries(css)) {
			html.style[attr] = value
		}
	}

	static addClass(clazz, html) {
		html.classList.add(clazz)
	}
}