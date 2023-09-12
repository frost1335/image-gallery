fetch("http://localhost:3000/men/boburman").then((data) => {
  return data.json();
}).then(data => console.log(data));
