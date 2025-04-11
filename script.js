const byteSize = (str) => {
	let encoder = new TextEncoder();
	let size = encoder.encode(`${str}`).length;
	return size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
