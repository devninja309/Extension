var english = document.querySelector('[data-qa="title"]').textContent;
fetch("http://localhost:5000/work", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ english })
}).then();
document.querySelector('[data-qa="title"]').textContent =
  "the way work should work";

