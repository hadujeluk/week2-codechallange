function generateArray(start, end) {
    const result = [];
  // allows the iniitial value input to add a value greater than one until it reaches the last value
    if (start <= end) {
      for (let p = start; p <= end; p++) {
        result.push(p);
      }
      
    }
    return result;
  }
  

  console.log(generateArray(4, 7));
  console.log(generateArray(-4, 7)); 
  