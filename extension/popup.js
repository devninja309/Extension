document.getElementById("french").addEventListener("click", french);
document.getElementById("spanish").addEventListener("click", spanish);
document.getElementById("english").addEventListener("click", english);

function french() {
  chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: async () => {
        const result = await fetch("http://localhost:5000/extension");
        const els = await result.json();
        els.map((item) => {
          console.log(item);
          if (item.french !== null)
          document.querySelector(item.unique).textContent =
            item.french;
        });
        // document.querySelector(result.json().selector)
      }
    });
  });
}

function spanish() {
  chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: async () => {
        const result = await fetch("http://localhost:5000/extension");
        const els = await result.json();
        els.map((item) => {
          console.log(item);
          if (item.spanish !== null)
            document.querySelector(item.unique).textContent =
              item.spanish;
        });
        // document.querySelector(result.json().selector)  "[" + item.unique + "]"
      }
    });
  });
}
function english() {
  chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: async () => {
        const result = await fetch("http://localhost:5000/extension");
        const els = await result.json();
        els.map((item) => {
          console.log(item);
          if (item.english !== null)
          document.querySelector(item.unique).textContent =
            item.english;
        });
        // document.querySelector(result.json().selector)
      }
    });
  });
}

//   req.query?.language
//   const result = await fetch("http://localhost:5000/extension?language=french")
