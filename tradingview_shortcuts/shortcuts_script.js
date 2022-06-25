function selectTimeframe(value) {
  document.getElementById("header-toolbar-intervals").children[0].click();
  document.querySelector(`[data-value = '${value}']`).click();
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

    if (e.altKey && e.keyCode == 49) {      // when altKey is pressed and key 1 is pressed -> timeframe 1 minute is selected
      selectTimeframe("1");    // 1 minute
    }

    if (e.altKey && e.keyCode == 50) {
      selectTimeframe("15");   // 15 minutes
    }

    if (e.altKey && e.keyCode == 51) {
      selectTimeframe("60");   // 1h
    }

    if (e.altKey && e.keyCode == 52) {
      selectTimeframe("240");
    }

    if (e.altKey && e.keyCode == 53) {
      selectTimeframe("1D");
    }

    // Template for a new shortcut (this is commented out code)
    // if (e.altKey && e.keyCode == <key code of keyboard key>) {
    //   selectTimeframe("<timeframe>");
    // }

  },
  false
);
