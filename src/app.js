/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let domainName = [];
  let pro = ["best", "smart", "happy"];
  let adj = ["big", "modern", "creative"];
  let noun = ["sun", "cloud", "sky"];
  let dom = [".com", ".net", ".org"];
  for (let a = 0; a < pro.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < dom.length; d++) {
          domainName.push(" " + pro[a] + adj[b] + noun[c] + dom[d]);
        }
      }
    }
  }
  console.log("Any string");
  document.getElementById("domain").innerHTML = domainName;
};
