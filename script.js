new Vue({
	el: "#parent",
	data: {
		msg: "Hello, World!"
	},
	methods: {
		helloWorldOriginal() {
			return "Hello!";
		},
		helloWorld() {
			console.log(this);
		},
		otherMethod: () => {
			console.log(this);
		}
	}
});