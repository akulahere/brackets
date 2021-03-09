module.exports = function check(str, bracketsConfig) {
      const openBracket = [];
      const closeBracket = [];
      const stack = [];

      bracketsConfig.forEach(elem => {
          openBracket.push(elem[0]);
          closeBracket.push(elem[1]);
      });
    console.log(str);
    for (var i = 0; i < str.length; i++) {
        console.log(`Stack: ${stack}`);
        console.log(str[i]);
        if (openBracket.indexOf(str[i]) >= 0 && closeBracket.indexOf(str[i]) >= 0) {
            if (stack.includes(str[i])) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
         else if (openBracket.indexOf(str[i]) >= 0) {
                stack.push(str[i]);
        } else {
            console.log(closeBracket.indexOf(str[i]));
            console.log(openBracket.indexOf(str[i]));
            if (closeBracket.indexOf(str[i]) != openBracket.indexOf(stack.pop())) {
                return false;
            }
        }
        console.log(`Stack after: ${stack}`);

    }

    if (stack.length > 0) {
        return false;
    }

    return true;

      // str.split('').map(bracket => {
      //     if (closeBracket.includes(bracket)) {
      //         if (closeBracket.indexOf(bracket) === openBracket.indexOf(stack[stack.length - 1])) {
      //             stack.pop();
      //         }
      //     }
      //     if (openBracket.includes(bracket)) {
      //         stack.push(bracket);
      //     } else {
      //         return false;
      //     }
      //
      //     console.log(stack);
      // });
      // return stack.length > 0 ? false : true;

}
