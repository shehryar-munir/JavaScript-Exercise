console.clear()
const reverseWords = ( words ) => {
    let words_arr = [] // to store all the words in string
    let str = "" 

    // iterating over the string and tokenizing on the basis of ' ' (space)
    for (word of words){

        if (word === ' '){
            words_arr.push(str)
            str = ''
        }
        else {
            str += word
        }
    }
    words_arr.push(str) // pushing last word

    // creating string of reversed words
    let reversed_words = ''

    for (j = words_arr.length - 1 ; j >= 0; j--){

        reversed_words += words_arr[j]
        
        // avoiding space at last
        if (j > 0){
            reversed_words += ' '
        }
    }
    
    return reversed_words
}


console.log(reverseWords("Single Threaded"));
console.log(reverseWords("Sallam Dunya!! Hope everythings fine here"));
console.log(reverseWords("Hello This is Burak Bin Munir"));
