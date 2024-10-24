import TaskCard from '../components/TaskCard.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits();
let __VLS_typeProps;
const __VLS_props = defineProps();
const { tasks } = __VLS_props;
console.log("Inside renderTask", tasks);
function updateImportant(val) {
    emit('updateImportant', val);
}
function updateTaskStatus(val) {
    emit('updateTaskStatus', val);
}
function updateTodo(val) {
    emit('updateTodo', val);
}
console.log("after chamnbeg", tasks);
// const updatedStatus = computed(() => {
//     return tasks.filter(task => !task.isComplete)
// })
const __VLS_fnComponent = (await import('vue')).defineComponent({
    __typeEmits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-1 flex-wrap gap-4 justify-evenly py-20") }, });
    for (const [task, idx] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
        // @ts-ignore
        [TaskCard, TaskCard,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(TaskCard, new TaskCard({ ...{ 'onUpdateTodo': {} }, ...{ 'onUpdateTaskStatus': {} }, ...{ 'onUpdateImportant': {} }, key: ((idx)), task: ((task)), }));
        const __VLS_1 = __VLS_0({ ...{ 'onUpdateTodo': {} }, ...{ 'onUpdateTaskStatus': {} }, ...{ 'onUpdateImportant': {} }, key: ((idx)), task: ((task)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        let __VLS_5;
        const __VLS_6 = {
            onUpdateTodo: (...[$event]) => {
                __VLS_ctx.updateTodo({ val: $event.val, index: idx });
            }
        };
        const __VLS_7 = {
            onUpdateTaskStatus: (...[$event]) => {
                __VLS_ctx.updateTaskStatus({ val: $event.val, index: idx });
            }
        };
        const __VLS_8 = {
            onUpdateImportant: (...[$event]) => {
                __VLS_ctx.updateImportant({ val: $event.val, index: idx });
            }
        };
        let __VLS_2;
        let __VLS_3;
        const __VLS_4 = __VLS_pickFunctionalComponentCtx(TaskCard, __VLS_1);
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['justify-evenly'];
    __VLS_styleScopedClasses['py-20'];
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
            TaskCard: TaskCard,
            tasks: tasks,
            updateImportant: updateImportant,
            updateTaskStatus: updateTaskStatus,
            updateTodo: updateTodo,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
;
