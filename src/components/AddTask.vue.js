import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const task = ref("");
const emit = defineEmits(['add:task']);
function handleClick() {
    if (task.value) {
        if (task.value.length <= 5) {
            alert("word length must be greater then 5");
            return;
        }
        else if (task.value.length >= 30) {
            alert("word length must be less then 30");
            return;
        }
        let taskObj = {
            date: new Date().toString(),
            task: task.value,
            isComplete: false,
            isEdit: false,
            isImportant: false
        };
        emit('add:task', taskObj);
    }
    else {
        alert("Add task first");
    }
    task.value = "";
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-5 ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ required: (true), value: ((__VLS_ctx.task)), type: ("text"), ...{ class: ("lg:w-[30rem] shadow-lg border-2 rounded-full px-4 py-2 bg-transparent text-[#1D3557] font-nunito text-xl font-semibold focus:outline-none placeholder-nunito placeholder:text-[#1D3557] placeholder:text-xl placeholder:font-semibold border-[#1D3557]") }, placeholder: ("Add Task"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.handleClick) }, ...{ class: (" group flex relative items-center bg-[#F1FAEE] rounded-full shadow-md font-nunito font-semibold text-[#1D3557] transition-all duration-300 ease-in-out") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/icons/add.svg"), alt: ("add-icon"), ...{ class: ("w-[3rem] group-hover:shadow-lg rounded-full z-10 transition-all duration-300 ease-in-out") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: (" bg-[#F1FAEE] h-[3rem] -left-11 shadow-md  overflow-hidden rounded-full -z-1 items-center w-[6rem] absolute hidden group-hover:inline-flex group-hover:translate-x-[2.8rem] transition-all duration-500 ease-in-out pl-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("whitespace-nowrap transition-all duration-300 ease-in-out ml-[2.5rem]") }, });
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['lg:w-[30rem]'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['text-[#1D3557]'];
    __VLS_styleScopedClasses['font-nunito'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['placeholder-nunito'];
    __VLS_styleScopedClasses['placeholder:text-[#1D3557]'];
    __VLS_styleScopedClasses['placeholder:text-xl'];
    __VLS_styleScopedClasses['placeholder:font-semibold'];
    __VLS_styleScopedClasses['border-[#1D3557]'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['bg-[#F1FAEE]'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['font-nunito'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-[#1D3557]'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['w-[3rem]'];
    __VLS_styleScopedClasses['group-hover:shadow-lg'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['bg-[#F1FAEE]'];
    __VLS_styleScopedClasses['h-[3rem]'];
    __VLS_styleScopedClasses['-left-11'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['-z-1'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-[6rem]'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['group-hover:inline-flex'];
    __VLS_styleScopedClasses['group-hover:translate-x-[2.8rem]'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-500'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['pl-3'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['ml-[2.5rem]'];
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
            task: task,
            handleClick: handleClick,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
;
