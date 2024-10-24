<script setup lang="ts">
import { onMounted, reactive } from "vue";
import AddTask from "./components/AddTask.vue";
import RenderTask from "./components/RenderTask.vue";

interface Task {
  task: string;
  date: string;
  isImportant: boolean;
  isComplete: boolean;
  isEdit: boolean;
}

const tasks = reactive<Task[]>([]);

onMounted(() => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks.push(...JSON.parse(storedTasks));
  }
});


function takeTask(newTask: Task) {
  tasks.unshift(newTask);
  updateLocalStorage();
}


function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function updateImportant({ val, index }: { val: boolean; index: number }) {
  const task = tasks[index];
  if (task) {
    task.isImportant = val;
    updateLocalStorage();
  }
}


function updateTaskStatus({ val, index }: { val: boolean; index: number }) {
  tasks.splice(index, 1);
  updateLocalStorage();
}

function updateTodo({val, index}: {val:string, index: number}){
  tasks[index].task = val
  tasks[index].date = Date()
  updateLocalStorage()
}

</script>



<template>
  <div class="w-11/12 mx-auto ">
    <div
      class="flex justify-center font-[Poppins] lg:text-[11rem] md:text-[5rem]  text-[3rem] md:tracking-tight font-semibold text-[#1D3557] items-center  md:gap-8">
      <span>TODO</span>
      <span><img src="./assets/icons/todo_logo.svg" alt="logo" class="md:w-[6.5rem] w-[3.5rem]" /></span>
      <span>LIST</span>
    </div>


     <AddTask class="flex justify-center lg:my-8 my-12" @add:task="takeTask" />

    <div v-if="tasks.length === 0" class="lg:mt-44  text-center text-[3rem] md:text-[4.5rem] font-nunito font-semibold text-gray-400">TODO LIST IS EMPTY</div>
    <RenderTask :tasks="tasks" @update-todo="updateTodo"  @update-important="updateImportant" @update-task-status="updateTaskStatus" />
  </div>
</template>
