new Vue({
	el: "#parent",
	data: {
		msg: "Hello, World!",
		inputFieldValue: "Dummy Text Goes Here!"
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