function isBalanced(s) {
    // Write your code here
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];

    for (let bracket of s) {
        if (openingBrackets.includes(bracket)) {
            stack.push(bracket);
        } else if (closingBrackets.includes(bracket)) {
            const lastOpeningBracket = stack.pop();
            const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(bracket)];

            if (lastOpeningBracket !== correspondingOpeningBracket) {
                return 'NO';
            }
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';

}