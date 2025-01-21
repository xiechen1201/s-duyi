/* 
    纯类的方式实现装饰器
*/

/* // 组件接口
class TextMessage {
    constructor(message) {
        this.message = message;
    }

    getText() {
        return this.message;
    }
}

// 装饰器实现基类
class MessageDecorator {
    constructor(textMessage) {
        this.textMessage = textMessage;
    }

    getText() {
        return this.textMessage.getText();
    }
}

// 具体装饰器 HTML 装饰器
class HTMLDecorator extends MessageDecorator {
    getText() {
        const message = super.getText();
        return `<p>${message}</p>`;
    }
}

// 具体装饰器 加密装饰器
class EncryptionDecorator extends MessageDecorator {
    getText() {
        const message = super.getText();
        return this.encrypt(message);
    }
    encrypt(message){
        return message.split('').reverse().join('');
    }
}

let message = new TextMessage('Hello World');
message = new HTMLDecorator(message);
message = new EncryptionDecorator(message);

console.log(message.getText()); */

/* 
    高阶函数的形式实现装饰器
*/

class TextMessage {
    constructor(message) {
        this.message = message;
    }

    getText() {
        return this.message;
    }
}

// 闭包高阶函数
function HTMLDecorator(BaseClass) {
    return class extends BaseClass {
        getText() {
            const message = super.getText();
            return `<p>${message}</p>`;
        }
    };
}

function EncryptionDecorator(BaseClass) {
    return class extends BaseClass {
        getText() {
            const message = super.getText();
            return this.encrypt(message);
        }
        encrypt(message) {
            return message.split("").reverse().join("");
        }
    };
}

let message = HTMLDecorator(TextMessage);
message = EncryptionDecorator(message);
const instance = new message("Hello World");

console.log(instance.getText());