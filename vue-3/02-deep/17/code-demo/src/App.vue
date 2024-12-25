<template>
  <div class="app-container">
    <h1>任务管理应用</h1>

    <TaskManagerV2
      ref="taskCom1"
      :initialTasks="tasks"
      @task-completed="handleTaskCompleted"
      @task-uncompleted="handleTaskUnCompleted"
    />

    <hr />

    <TaskManagerV3
      ref="taskCom2"
      :initialTasks="tasks"
      @task-completed="handleTaskCompleted"
      @task-uncompleted="handleTaskUnCompleted"
    />

    <hr />

    <TaskManagerV3DefineCom
      :initialTasks="tasks"
      @task-completed="handleTaskCompleted"
      @task-uncompleted="handleTaskUnCompleted"
    />

    <hr />

    <TaskManagerV3Setup
      ref="taskCom3"
      :initialTasks="tasks"
      @task-completed="handleTaskCompleted"
      @task-uncompleted="handleTaskUnCompleted"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

import TaskManagerV2 from './components/TaskManagerV2.vue'
import TaskManagerV3 from './components/TaskManagerV3.vue'
import TaskManagerV3DefineCom from './components/TaskManagerV3DefineCom.vue'
import TaskManagerV3Setup from './components/TaskManagerV3Setup.vue'

const taskCom1 = ref(null)
const taskCom2 = ref(null)
const taskCom3 = ref(null)

onMounted(() => {
  console.log(taskCom1.value)
  console.log(taskCom2.value)
  console.log(taskCom3.value)
})

const tasks = reactive([
  { id: 1, title: '学习 Vue.js', completed: false },
  { id: 2, title: '学习 React.js', completed: false },
  { id: 3, title: '学习 Angular.js', completed: false }
])

function handleTaskCompleted(task) {
  console.log('任务已完成', task)
}

function handleTaskUnCompleted(task) {
  console.log('任务取消完成', task)
}
</script>

<style scoped>
.app-container {
  text-align: center;
  color: #333;
  margin-top: 60px;
}
</style>
