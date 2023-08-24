function reverseVowel(text) {
    const arr = text.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let leftVowel = isVowel(arr[left]);
        let rightVowel = isVowel(arr[right]);

        if (leftVowel && rightVowel) {
            swap(arr, left, right);
            ++left;
            --right;
        }
        if (!leftVowel) {
            ++left;
        }
        if (!rightVowel) {
            --right;
        }
    }

    return arr.join('');
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(letter);
}

const input = "personal";
const reversedVowels = reverseVowel(input);

console.log(reversedVowels); // Output: Holle Werld
