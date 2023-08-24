const findDuplicates = (arr) => {
    const frequency = new Map();
    
    return arr.reduce((duplicates, element) => {
      if (frequency.has(element)) {
        if (frequency.get(element)) {
          duplicates.push(element);
        }
        frequency.set(element, frequency.get(element) + 1);
      } else {
        frequency.set(element, 1);
      }
      return duplicates;
    }, []);
  };
  
  const input = [3, 3, 2, 2, ,7,7,5];
  const duplicateElements = findDuplicates(input);
  
  console.log("Duplicate elements:", duplicateElements);
  