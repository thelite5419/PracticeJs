//Wap to check if given character is vowel or consonents
VowelOrConsonent('a');
VowelOrConsonent('g');
VowelOrConsonent('A');



function VowelOrConsonent(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            console.log(`${char} this character is vowel`);
            break;
        default:
            console.log(`${char} this character is consonent`);
    }
}