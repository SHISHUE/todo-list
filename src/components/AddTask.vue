<script setup lang="ts">
import { ref } from "vue"
const task = ref("")
const emit = defineEmits(['add:task'])
function handleClick() {
    if (task.value) {

        if (task.value.length <= 5) {
            alert("word length must be greater then 5")
            return
        } else if (task.value.length >= 30) {
            alert("word length must be less then 30")
            return
        }

        let taskObj: {
            date: string,
            task: string, 
            isImportant: boolean,
            isComplete: boolean,
            isEdit: boolean
        } = {
            date: new Date().toString(),
            task: task.value,
            isComplete: false,
            isEdit: false,
            isImportant: false
        }
        emit('add:task', taskObj)
    } else {
        alert("Add task first")
    }
    task.value = ""
}



</script>

<template>
    <div class="flex items-center gap-2 md:gap-5 ">
        <input required v-model="task"  type="text"
            class="w-[30rem] sm:w-[32rem] shadow-lg border-2 rounded-full px-4  py-2 bg-transparent text-[#1D3557] font-nunito lg:text-xl font-semibold focus:outline-none placeholder-nunito placeholder:text-[#1D3557] placeholder:lg:text-xl placeholder:font-semibold border-[#1D3557]"
            placeholder="Add Task" />

        <button @click="handleClick"
            class=" group flex relative items-center bg-[#F1FAEE] rounded-full shadow-md font-nunito font-semibold text-[#1D3557] transition-all duration-300 ease-in-out"
            >
            <img src="../assets/icons/add.svg" alt="add-icon"
                class="w-[3rem] group-hover:shadow-lg rounded-full z-10 transition-all duration-300 ease-in-out" />


            <span
                class=" bg-[#F1FAEE] h-[3rem] -left-11 shadow-md  overflow-hidden rounded-full -z-1 items-center w-[6rem] absolute hidden group-hover:lg:inline-flex group-hover:lg:translate-x-[2.8rem] transition-all duration-500 ease-in-out pl-3">
                <p class="whitespace-nowrap transition-all duration-300 ease-in-out ml-[2.5rem]">Add</p>
            </span>
        </button>
    </div>
</template>
