const nums = [num0, num1, num2, num3, num4,
    num5, num6, num7, num8, num9];

nums.forEach((num, i) => {
    num.addEventListener("click", () => {
        handleNumPress(i);
    });
})

clr.addEventListener("click", handleClear);

dot.addEventListener("click", () => {
    handleNumPress(".");
});

div.addEventListener("click", () => {
    handleActionButton(DIV_OP);
});

mlt.addEventListener("click", () => {
    handleActionButton(MLT_OP);
});

min.addEventListener("click", () => {
    handleActionButton(MIN_OP);
});

pls.addEventListener("click", () => {
    handleActionButton(PLS_OP);
});

eql.addEventListener("click", handleEquals);