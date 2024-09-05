import { createApp, h } from 'vue';

const Child = {
  template: `
  <div class="child-container">
    <h3>这是子组件</h3>
    <p>姓名：{{ name }}</p>
    <p>email：{{ email }}</p>
  </div>`,
  props: {
    name: String,
    email: String
  },
  setup() {}
};

createApp({
  template: `
  <div class="app-container">
    <h1>这是App组件</h1>
    <Component :is="vNode" />
  </div>`,
  setup() {
    const vNode = h(Child, { name: '李四', email: '123@qq.com' });
    console.log(vNode);

    return {
      vNode
    };
  }
}).mount('#app');
