/* 
    创建并打印扑克牌
    目标：
        1、创建一副扑克牌（不含大小王）
        2、打印该扑克牌
*/

import { createDeck, printDeck } from "./funcs";

const result = createDeck();
printDeck(result);
