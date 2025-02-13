# watch 面试题

watch 的使用：

```js
const count = ref("");

watch(count, (newValue, oldValue) => {
    console.log(newValue, oldValue);
});
```
