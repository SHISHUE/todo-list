import { onMounted, reactive } from "vue";
import AddTask from "./components/AddTask.vue";
import RenderTask from "./components/RenderTask.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tasks = reactive([]);
onMounted(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks.push(...JSON.parse(storedTasks));
    }
});
function takeTask(newTask) {
    tasks.unshift(newTask);
    updateLocalStorage();
}
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function updateImportant({ val, index }) {
    const task = tasks[index];
    if (task) {
        task.isImportant = val;
        updateLocalStorage();
    }
}
function updateTaskStatus({ val, index }) {
    tasks.splice(index, 1);
    updateLocalStorage();
}
function updateTodo({ val, index }) {
    tasks[index].task = val;
    tasks[index].date = Date();
    updateLocalStorage();
}
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (" w-11/12 mx-auto ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center font-[Poppins] lg:text-[11rem]  text-[3.5rem] lg:tracking-tight font-semibold text-[#1D3557] items-center gap-4 lg:gap-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/icons/todo_logo.svg"), alt: ("logo"), ...{ class: ("lg:w-[6.5rem] w-[3.5rem]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    [AddTask,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(AddTask, new AddTask({ ...{ 'onAdd:task': {} }, ...{ class: ("flex justify-center lg:my-8 my-12") }, }));
    const __VLS_1 = __VLS_0({ ...{ 'onAdd:task': {} }, ...{ class: ("flex justify-center lg:my-8 my-12") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        'onAdd:task': (__VLS_ctx.takeTask)
    };
    let __VLS_2;
    let __VLS_3;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(AddTask, __VLS_1);
    if (__VLS_ctx.tasks.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:mt-44  text-center text-[3rem] lg:text-[4.5rem] font-nunito font-semibold text-gray-400") }, });
    }
    // @ts-ignore
    [RenderTask,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(RenderTask, new RenderTask({ ...{ 'onUpdateTodo': {} }, ...{ 'onUpdateImportant': {} }, ...{ 'onUpdateTaskStatus': {} }, tasks: ((__VLS_ctx.tasks)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onUpdateTodo': {} }, ...{ 'onUpdateImportant': {} }, ...{ 'onUpdateTaskStatus': {} }, tasks: ((__VLS_ctx.tasks)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onUpdateTodo: (__VLS_ctx.updateTodo)
    };
    const __VLS_14 = {
        onUpdateImportant: (__VLS_ctx.updateImportant)
    };
    const __VLS_15 = {
        onUpdateTaskStatus: (__VLS_ctx.updateTaskStatus)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(RenderTask, __VLS_8);
    __VLS_styleScopedClasses['w-11/12'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['font-[Poppins]'];
    __VLS_styleScopedClasses['lg:text-[11rem]'];
    __VLS_styleScopedClasses['text-[3.5rem]'];
    __VLS_styleScopedClasses['lg:tracking-tight'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-[#1D3557]'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['lg:gap-8'];
    __VLS_styleScopedClasses['lg:w-[6.5rem]'];
    __VLS_styleScopedClasses['w-[3.5rem]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['lg:my-8'];
    __VLS_styleScopedClasses['my-12'];
    __VLS_styleScopedClasses['lg:mt-44'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-[3rem]'];
    __VLS_styleScopedClasses['lg:text-[4.5rem]'];
    __VLS_styleScopedClasses['font-nunito'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-gray-400'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AddTask: AddTask,
            RenderTask: RenderTask,
            tasks: tasks,
            takeTask: takeTask,
            updateImportant: updateImportant,
            updateTaskStatus: updateTaskStatus,
            updateTodo: updateTodo,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
