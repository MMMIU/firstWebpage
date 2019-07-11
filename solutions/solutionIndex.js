function select(index) {
	if (index == 1) {
		if (!document.getElementById("indestrySolution").classList
				.contains("selected")) {
			document.getElementById("indestrySolution").classList
					.add("selected");
			if (document.getElementById("generalSolution").classList
					.contains("selected")) {
				document.getElementById("generalSolution").classList
						.remove("selected");
			}
		}
		window.scrollTo(0, 455);
	} else {
		if (!document.getElementById("generalSolution").classList
				.contains("selected")) {
			document.getElementById("generalSolution").classList
					.add("selected");
			if (document.getElementById("indestrySolution").classList
					.contains("selected")) {
				document.getElementById("indestrySolution").classList
						.remove("selected");
			}
		}
		window.scrollTo(0, 1755);
	}
}