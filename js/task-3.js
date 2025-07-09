function getElementWidth(content, padding, border) {
    const contentClear = parseFloat(content);
    const paddingClear = parseFloat(padding);
    const borderClear = parseFloat(border);
    return contentClear + 2 * paddingClear + 2 * borderClear;
    // const totalWidth = contentClear + 2 * paddingClear + 2 * borderClear;
    // return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200