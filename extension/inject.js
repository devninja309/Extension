const english = [];
var obj = {};
fetch("http://localhost:5000/extension")
  .then(res => res.json())
  .then((res) => {
    res.map((item) => {
      obj[item.selector] = document.querySelector("[" + item.selector + "]").textContent
      english.push(obj);
    })
    console.log(english);
    fetch("http://localhost:5000/extension", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ english })
    }).then();
  })



// var english = document.querySelector('[data-qa="title"]').textContent;

// document.querySelector('[data-qa="title"]').textContent =
//   "the way work should work";

