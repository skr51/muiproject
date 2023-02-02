import { getValue } from "@testing-library/user-event/dist/utils"

export const MobileCharacter = [
    " ",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    ",",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    ">",
    "<",
    ".",
    ",",
    "?",
    "/",
    "|",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M", 
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"
]
export const NameCharacter = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    ",",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    ">",
    "<",
    ".",
    ",",
    "?",
    "/",
    "|",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]
export const MailCharacter = [
    "~",
    "`",
    "!",
    " ",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    ",",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    ">",
    "<",
    ",",
    "?",
    "/",
    "|",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
]

export function checkInitialSpace(value) {
    if (/^\s/.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  
  export function checkDuplicateSpaces(value) {
    if (/\s\s+/g.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  export function mailcorrect(value){
    if(value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){
        return true;
    }else{
        return false;
    }
    
  }
  export function checkInitialDigit(value) {
    const notEntry = [0,1,2,3,4,5]
    if (notEntry.test(value)) {
      return true;
    } else {
      return false;
    }
  }