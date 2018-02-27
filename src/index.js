module.exports = function check(str, bracketsConfig) {
    const closed = []; // we push closed brackets if it goes first 
    const stack = []; // stack length should be zero at the end
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] === bracketsConfig[j][1] && bracketsConfig[j][0] === stack[stack.length - 1]) {
                stack.pop();
            } else if (str[i] === bracketsConfig[j][0]) {
                stack.push(str[i]);
            } else if (str[i] === bracketsConfig[j][1] && stack.length === 0) {
                closed.push(str[i]);
            }
        }
    }
    return stack.length === 0 && closed.length === 0;
}