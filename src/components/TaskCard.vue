<script setup lang="ts">
import { computed, defineProps, HtmlHTMLAttributes, provide, reactive, ref, VNode } from 'vue';
import ImportantIcon from "../assets/icons/important.svg"
import CompletedIcon from '../assets/icons/completed.svg'
import EditIcon from '../assets/icons/edit.svg'
import StarIcon from '../assets/icons/star.svg'
import CheckIcon from '../assets/icons/check.svg'

const props = defineProps(['task'])
console.log(props.task);

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

let date = new Date(props.task.date)
const isImportant = ref(false)
const isComplete = ref(false)
const isEdit = ref(false)

const taskRef = ref<HTMLElement | null>(null);

const emit = defineEmits<{
    (e: 'updateImportant', value: {
        val: boolean,
        index: number
    }): void,
    (e: 'updateTaskStatus', value: {
        val: boolean,
        index: number
    }): void,
    (
        e: 'updateTodo',
        value: {
            val: string,
            index: number
        }
    ): void
}>()

const functionalIcons: {
    path: string,
    text: string
}[] = reactive([{
    path: (props.task.isImportant) ? StarIcon : ImportantIcon,
    text: "Important"
}, {
    path: CompletedIcon,
    text: "Completed"
}, {
    path: (isEdit.value) ? CheckIcon : EditIcon,
    text: (isEdit.value) ? "Done" : "Edit",
}])


const computedFunctionalIcon = computed(() => {
    return [{
        path: (props.task.isImportant) ? StarIcon : ImportantIcon,
        text: "Important"
    }, {
        path: CompletedIcon,
        text: "Completed"
    }, {
        path: (isEdit.value) ? CheckIcon : EditIcon,
        text: (isEdit.value) ? "Done" : "Edit",
    }]
})

function clickHandler(target: string, val: number) {

    if (target == "Important") {
        isImportant.value = !isImportant.value

        emit('updateImportant', { val: isImportant.value, index: val })

    } else if (target == "Completed") {
        isComplete.value = true
        emit('updateTaskStatus', { val: isComplete.value, index: val })
    } else if (target == "Edit") {
        isEdit.value = true
    } else {
        isEdit.value = false
        if(taskRef.value?.innerText) {
            if((taskRef.value.innerText.length >= 5) && (taskRef.value.innerText.length <= 30)) emit('updateTodo', {val: taskRef.value?.innerText, index: val})

        }
        console.log(taskRef.value?.innerText);
    }



}






</script>

<template>
    <div :class="{ ' animate-bounce hover:animate-none': props.task.isImportant }"
        class="relative bg-gradient-to-r from-zinc-950 to-[#182a44d5] text-stone-50 w-[35rem] p-5 h-[22rem] border-2 hover:bg-zinc-950 hover:scale-105 transition-all duration-300 ease-in-out hover:backdrop-blur-lg hover:backdrop-brightness-100 hover:border-[#1D3557] hover:bg-transparent aspect-square rounded-xl shadow-lg">
        <h1 class=" text-opacity-60 font-nunito font-semibold"></h1>
        <h1
            class="text-[2.5rem] bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent font-nunito font-bold">
            TASK
        </h1>

        <div class="absolute right-3 top-3 flex flex-col ">
            <div v-for="(iconContent, idx) in computedFunctionalIcon" :key="idx"
                class="flex relative  items-center gap-3 font-nunito font-bold text-right transition-all duration-300 ease-in-out">

                <img class="shadow-blue-300 peer w-[2rem] cursor-pointer drop-shadow-2xl" :src="iconContent.path"
                    :alt="iconContent.text" @click="clickHandler(iconContent.text, idx)">
                <span
                    class="opacity-0 absolute right-11 text-blue-200 peer-hover:opacity-100  transition-all duration-300 ease-in-out">{{
                        iconContent.text }}</span>
            </div>


        </div>

        <div class="flex h-[70%] mt-6  flex-col justify-between">
            <h2 :contenteditable="isEdit" ref="taskRef" :class="{ 'border-[0.8px] border-blue-300 px-2': isEdit }"
                class="text-[1.5rem] font-nunito bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent break-words font-bold">
                {{ props.task.task }}
            </h2>

        </div>
        <h3
            class="flex text-right text-[0.9rem] gap-3 font-nunito bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-bold text-transparent">
            <span>{{ days[date.getDay()] }}</span>
            <span>{{ `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` }}</span>
        </h3>

    </div>
</template>
