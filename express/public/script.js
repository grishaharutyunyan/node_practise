// fetch('/bye')
//   .then(res => res.json())
//   .then(resp => {
//     alert(resp.name);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

fetch("hi", {
  method: "post",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "akcpake"
  })
});
