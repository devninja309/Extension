document.getElementById("french").addEventListener("click", french);
document.getElementById("spanish").addEventListener("click", spanish);

function french() {
  chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: async () => {
        const result = await fetch("http://localhost:5000/extension");
        const els = await result.json();
        els.map((item) => {
          console.log("dfgdf");
          document.querySelector("[" + item.selector + "]").textContent =item.french;
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
          console.log("dfgdf");
          document.querySelector("[" + item.selector + "]").textContent =item.spanish;
        });
        // document.querySelector(result.json().selector)
      }
    });
  });
}

//   req.query?.language
//   const result = await fetch("http://localhost:5000/extension?language=french")
