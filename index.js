// code your solution here
function superbowlWin(record) {
    // Find the first win object in the record array
    let win = record.find(game => game.result === 'W');
  
    // If a win is found, return the year, otherwise return undefined
    return win ? win.year : undefined;
  }
  