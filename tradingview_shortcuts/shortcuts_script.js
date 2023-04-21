function selectTimeframe(value) {
  window.TradingViewApi.activeChart().setResolution(value);
}

function selectRectangleTool() {
  window.TradingViewApi.selectLineTool("rectangle")
}


// Legacy code that I want to keep for the future generations (in case I need it :D)
function _selectRectangleTool(mode) {
  document
    .querySelectorAll('[data-name="linetool-group-geometric-shapes"]')[0]
    .children[1].click();
  document.querySelectorAll('[data-name="LineToolRectangle"]')[0].click();

  function openWidgetsToolbar() {
    let element = document.getElementsByClassName(
      "floating-toolbar-react-widgets__button"
    )[0];
    element.click();
  }

  setTimeout(openWidgetsToolbar, 200);

  setTimeout(() => {
    const templatesMenu = document.querySelectorAll(
      '[data-name="templates-menu"]'
    )[0];
    const templates = Array.from(
      templatesMenu.querySelectorAll('[data-label="true"]')
    );

    templates.map((el) => {
      if (el.innerHTML.toLowerCase().includes(mode)) {
        el.parentElement.parentElement.click();
      }
    });
  }, 200);
}

/* 

TO MODIFY THE KEYSHORTCUTS:

e.keyCode represents the key code of the keyboard key you are pressing. 
The program checks if keycode is 49 (1) in the first IF statement.

49 - key 1
50 - key 2
51 - key 3
52 - key 4
53 - key 5

the rest are here - https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes


TO MODIFY THE TIMEFRAMES:

The timeframes have the following pattern
"<number>" - minutes (hours are minutes / 60, i.e. 1 hour == 60 minutes, 2 hours == 120 minutes and etc.)
"<number>D" - days 
"<number>W" - weeks 
*/

window.addEventListener(
  "keydown",
  (e) => {
    // These are the shortcuts. Feel free to add more

    if (e.altKey && e.keyCode == 192) {
      // when altKey is pressed and key ` is pressed -> timeframe 1 minute is selected
      selectTimeframe("1"); // 1 minute
    }

    if (e.altKey && e.keyCode == 49) {
      selectTimeframe("5"); // 5 minute
    }

    if (e.altKey && e.keyCode == 50) {
      selectTimeframe("15"); // 15 minutes
    }

    if (e.altKey && e.keyCode == 51) {
      selectTimeframe("60"); // 1h
    }

    if (e.altKey && e.keyCode == 52) {
      selectTimeframe("240");
    }

    if (e.altKey && e.keyCode == 53) {
      selectTimeframe("1D");
    }

    if (e.altKey && e.keyCode == 81) {
      selectRectangleTool();
    }

    // Template for a new shortcut (this is commented out code)
    // if (e.altKey && e.keyCode == <key code of keyboard key>) {
    //   selectTimeframe("<timeframe>");
    // }
  },
  false
);
