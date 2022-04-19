import { POLISHCURSES } from "../PolishCurses";

const findCursesSong = (lyrics) => {
  if (lyrics == null) return [null, null];

  // check if lyrics doesnt exist on genius
  if (lyrics.indexOf("Styczeń01.01 - Joker Anagram") >= 0) return [null, null];

  //convert string to array of words
  var wordArray = lyrics
    .replace(/(\[.*?\]|\(.*?\)) */g, "")
    .split(" ")
    .join(",")
    .split("\n")
    .join(",")
    .split(",");

  wordArray = wordArray.filter(function (str) {
    return /\S/.test(str);
  });

  let howManyWords = wordArray.length;
  let howManyCurseWords = 0;

  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 0; j < POLISHCURSES.length; j++) {
      if (wordArray[i].indexOf(POLISHCURSES[j]) >= 0) {
        howManyCurseWords++;
        break;
      }
    }
  }
  return [howManyCurseWords, howManyWords];
};

export { findCursesSong };
