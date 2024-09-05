const { createApp, ref, reactive, computed } = window.Vue;

/* const app = createApp({
  template: `
    <div>{{ obj.name.value }}</div>`,
  setup() {
    // const name = ref('张三');
    // const userInfo = reactive({
    //   name,
    //   age: 18
    // });
    // console.log(userInfo.name);

    const name = ref('Bill');
    const obj = shallowReactive({
      name
    });
  }
});

app.mount('#app'); */

// TODO:========================================

const app = createApp({
  template: `
    <div>{{ publishedBooksMessage }}</div>`,
  setup() {
    const author = reactive({
      name: 'John Doe',
      books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
    });

    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No';
    });

    console.log(publishedBooksMessage)

    return {
      publishedBooksMessage
    };
  }
});

app.mount('#app');
