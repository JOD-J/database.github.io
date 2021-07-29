	const addActiveClass = (arr, index, activeClass) => {
		if (arr.length) {
			arr.forEach((item, ind) => {
				item.classList.remove(activeClass);
				if (index === ind) {
					item.classList.add(activeClass);
				};
			});
		} else {
			[...arr.children].forEach((item, ind) => {
			item.classList.remove(activeClass);
			if (index === ind) {
				item.classList.add(activeClass);
				};
			});
		};
	};


export default addActiveClass;