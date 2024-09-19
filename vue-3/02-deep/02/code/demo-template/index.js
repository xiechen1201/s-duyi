import { createApp, h, defineComponent } from 'vue';

const UserCard = defineComponent({
  name: 'UserCard',
  props: {
    name: String,
    email: String,
    avatarUrl: String
  },
  setup(props) {
    return () =>
      h(
        'div',
        {
          class: 'user-card'
        },
        [
          h('img', {
            src: props.avatarUrl,
            class: 'avatar'
          }),
          h(
            'div',
            {
              class: 'user-info'
            },
            [h('h2', props.name), h('p', props.email)]
          )
        ]
      );
  }
});

/* const UserCard = {
  name: 'UserCard',
  props: {
    name: String,
    email: String,
    avatarUrl: String
  },
  render() {
    return h(
      'div',
      {
        class: 'user-card'
      },
      [
        h('img', {
          src: this.avatarUrl,
          class: 'avatar'
        }),
        h(
          'div',
          {
            class: 'user-info'
          },
          [h('h2', this.name), h('p', this.email)]
        )
      ]
    );
  }
} */

console.log(UserCard)

createApp({
  template: `
  <div class="app-container">
    <UserCard name="张三" email="zhangsan@163.com"  />
  </div>`,
  components: {
    UserCard
  }
}).mount('#app');
