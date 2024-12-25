/* type UserTextEvent = { value: string; target: HTMLInputElement };
type UserMouseEvent = { value: number; target: HTMLButtonElement };
type UserEvent = UserTextEvent | UserMouseEvent;

function handle(event: UserEvent) {
  // event 是一个联合类型，如果 value 是 string 那就处理 HTMLInputElement 相关的 DOM
  // 如果 value 是 number 那就处理 HTMLButtonElement 相关的 DOM
  if (typeof event.value === 'string') {
    // 🤔 (property) value: string
    console.log(event.value);
    // 🤔 (property) target: HTMLInputElement | HTMLButtonElement
    // 这里的 event 还是联合类型，并没有进行类型收缩
    console.log(event.target);
  }else{
    console.log(event.value);
    // 🤔 (property) target: HTMLInputElement | HTMLButtonElement
    console.log(event.target);
  }
} */

/* 
  其实联合类型的时候，UserEvent 的类型：
  type UserEvent = {
    value: string | number;
    target: HTMLInputElement | HTMLButtonElement;
  }

  我们使用 if 的时候判断的是 value，只能对 value 进行类型的缩小，target 还是联合类型

  我们可以给 Type 新增一个字面量类型来进行细化
*/

type UserTextEvent = { type: 'TextEvent'; value: string; target: HTMLInputElement };
type UserMouseEvent = { type: 'MouseEvent'; value: number; target: HTMLButtonElement };
type UserEvent = UserTextEvent | UserMouseEvent;

function handle(event: UserEvent) {
  if (event.type === 'TextEvent') {
    console.log(event.value);
    console.log(event.target);
  } else {
    console.log(event.value);
    console.log(event.target);
  }
}

handle({ type: 'TextEvent', value: 'hello', target: document.querySelector('input')! });
handle({ type: 'MouseEvent', value: 123, target: document.querySelector('button')! });
