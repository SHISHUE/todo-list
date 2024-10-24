<script setup lang="ts">
import TaskCard from '../components/TaskCard.vue'
interface Tasks {
    task: string,
    date: string,
    isImportant: boolean,
    isComplete: boolean,
    isEdit: boolean
}

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

const { tasks } = defineProps<{ tasks: Tasks[] }>();


function updateImportant(val: {
    val: boolean,
    index: number
}) {
    emit('updateImportant', val)
}

function updateTaskStatus(val: {
    val: boolean,
    index: number
}) {
    emit('updateTaskStatus', val)
    
}

function updateTodo(val:{
    val: string,
    index: number
}) {
    emit('updateTodo', val)
}




</script>

<template>
    <div class="flex flex-1 flex-wrap gap-4 justify-evenly lg:py-20">
        <TaskCard v-for="(task, idx) in tasks" :key="idx" :task="task" @update-todo="updateTodo({val: $event.val, index: idx})" @update-task-status="updateTaskStatus({val: $event.val, index:idx})"  @update-important="updateImportant({val: $event.val, index: idx})"></TaskCard>
    </div>
</template>
