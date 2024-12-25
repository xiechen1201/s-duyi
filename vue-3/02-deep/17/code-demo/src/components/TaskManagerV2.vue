<template>
  <div class="task-manager">
    <h2>任务列表</h2>
    <!-- 渲染各种待办事项 -->
    <ul>
      <li v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
        <span>{{ task.title }}</span>
        <div class="buttons">
          <button v-if="!task.completed" @click="completeTask(task.id)">完成</button>
          <button v-else @click="uncompleteTask(task.id)">取消完成</button>
        </div>
      </li>
    </ul>
    <!-- 添加新任务 -->
    <form @submit.prevent="addTask">
      <input v-model="newTaskTitle" placeholder="添加新任务" />
      <button type="submit">添加任务</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskManager',
  props: {
    initialTasks: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  data() {
    return {
      tasks: [...this.initialTasks],
      newTaskTitle: '' // 新任务标题
    }
  },

  methods: {
    // 新增任务
    addTask() {
      if (this.newTaskTitle.trim() === '') {
        return
      }
      // 添加新任务
      this.tasks.push({
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false
      })
      this.newTaskTitle = '' // 清空输入框
    },
    // 标记任务已完成
    completeTask(id) {
      const task = this.tasks.find((task) => task.id === id)
      if (task) {
        task.completed = true
        this.$emit('task-completed', task)
      }
    },
    // 标记任务未完成
    uncompleteTask(id) {
      const task = this.tasks.find((task) => task.id === id)
      if (task) {
        task.completed = false
        this.$emit('task-uncompleted', task)
      }
    }
  }
}
</script>

<style scoped>
.task-manager {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.task-manager h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

li.completed {
  background-color: #e0ffe0;
}

li.completed span {
  text-decoration: line-through;
  color: #999;
}

.buttons {
  display: flex;
  gap: 10px;
}

button {
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background-color: #218838;
}

button[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}

form {
  display: flex;
  margin-top: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
}

button[type='submit'] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type='submit']:hover {
  background-color: #0056b3;
}
</style>
