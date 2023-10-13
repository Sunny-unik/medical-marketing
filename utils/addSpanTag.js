function addSpanTags(text, indexPairs) {
  let result = text;

  indexPairs.forEach(([startIndex, endIndex]) => {
    if (startIndex < 0 || endIndex > text.length || startIndex >= endIndex) {
      console.error(`Invalid indices ${startIndex} and ${endIndex}`);
      return;
    }

    const spanStart = "<span>";
    const spanEnd = "</span>";

    const startText = result.substring(0, startIndex);
    const middleText =
      spanStart + result.substring(startIndex, endIndex) + spanEnd;
    const endText = result.substring(endIndex);
    result = startText + middleText + endText;
  });

  return result;
}
export default addSpanTags;
