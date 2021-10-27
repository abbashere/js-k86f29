// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function highlighterAction() {
  // actually do the highlighting stuff here
  console.log('highlighterAction');
}

function highlighter() {
  /*
    The short pause allows any required callback functions
    to execute before actually highlighting, and allows
    the JQuery $(document).ready wrapper to finish.
   */
  console.log('highlighter');
  setTimeout(function () {
    highlighterAction();
  }, 200);
}

/*
Only trigger the highlighter after document fully loaded.  This is
necessary for cases where page load takes a significant length
of time to fully load.
*/
if (document.readyState == 'complete') {
  console.log('complete');
  highlighter();
} else {
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      highlighter();
    }
  };
}
