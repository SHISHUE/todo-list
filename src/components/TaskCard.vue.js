import { computed, defineProps, reactive, ref } from 'vue';
import ImportantIcon from "../assets/icons/important.svg";
import CompletedIcon from '../assets/icons/completed.svg';
import EditIcon from '../assets/icons/edit.svg';
import StarIcon from '../assets/icons/star.svg';
import CheckIcon from '../assets/icons/check.svg';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps(['task']);
console.log(props.task);
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let date = new Date(props.task.date);
const isImportant = ref(false);
const isComplete = ref(false);
const isEdit = ref(false);
const taskRef = ref(null);
const emit = defineEmits();
const functionalIcons = reactive([{
        path: (props.task.isImportant) ? StarIcon : ImportantIcon,
        text: "Important"
    }, {
        path: CompletedIcon,
        text: "Completed"
    }, {
        path: (isEdit.value) ? CheckIcon : EditIcon,
        text: (isEdit.value) ? "Done" : "Edit",
    }]);
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
        }];
});
function clickHandler(target, val) {
    if (target == "Important") {
        isImportant.value = !isImportant.value;
        emit('updateImportant', { val: isImportant.value, index: val });
    }
    else if (target == "Completed") {
        isComplete.value = true;
        emit('updateTaskStatus', { val: isComplete.value, index: val });
    }
    else if (target == "Edit") {
        isEdit.value = true;
    }
    else {
        isEdit.value = false;
        if (taskRef.value?.innerText) {
            if ((taskRef.value.innerText.length >= 5) && (taskRef.value.innerText.length <= 30))
                emit('updateTodo', { val: taskRef.value?.innerText, index: val });
        }
        console.log(taskRef.value?.innerText);
    }
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['task'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ ' animate-bounce hover:animate-none': props.task.isImportant })) }, ...{ class: ("relative bg-gradient-to-r from-zinc-950 to-[#182a44d5] text-stone-50 w-[35rem] p-5 h-[22rem] border-2 hover:bg-zinc-950 hover:scale-105 transition-all duration-300 ease-in-out hover:backdrop-blur-lg hover:backdrop-brightness-100 hover:border-[#1D3557] hover:bg-transparent aspect-square rounded-xl shadow-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: (" text-opacity-60 font-nunito font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-[2.5rem] bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent font-nunito font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute right-3 top-3 flex flex-col ") }, });
    for (const [iconContent, idx] of __VLS_getVForSourceType((__VLS_ctx.computedFunctionalIcon))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((idx)), ...{ class: ("flex relative  items-center gap-3 font-nunito font-bold text-right transition-all duration-300 ease-in-out") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.clickHandler(iconContent.text, idx);
                } }, ...{ class: ("shadow-blue-300 peer w-[2rem] cursor-pointer drop-shadow-2xl") }, src: ((iconContent.path)), alt: ((iconContent.text)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("opacity-0 absolute right-11 text-blue-200 peer-hover:opacity-100  transition-all duration-300 ease-in-out") }, });
        (iconContent.text);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-[70%] mt-6  flex-col justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ contenteditable: ((__VLS_ctx.isEdit)), ref: ("taskRef"), ...{ class: (({ 'border-[0.8px] border-blue-300 px-2': __VLS_ctx.isEdit })) }, ...{ class: ("text-[1.5rem] font-nunito bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent break-words font-bold") }, });
    // @ts-ignore navigation for `const taskRef = ref()`
    __VLS_ctx.taskRef;
    (props.task.task);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("flex text-right text-[0.9rem] gap-3 font-nunito bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-bold text-transparent") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.days[__VLS_ctx.date.getDay()]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (`${__VLS_ctx.date.getDate()}/${__VLS_ctx.date.getMonth()}/${__VLS_ctx.date.getFullYear()}`);
    __VLS_styleScopedClasses['animate-bounce'];
    __VLS_styleScopedClasses['hover:animate-none'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-zinc-950'];
    __VLS_styleScopedClasses['to-[#182a44d5]'];
    __VLS_styleScopedClasses['text-stone-50'];
    __VLS_styleScopedClasses['w-[35rem]'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['h-[22rem]'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['hover:bg-zinc-950'];
    __VLS_styleScopedClasses['hover:scale-105'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['hover:backdrop-blur-lg'];
    __VLS_styleScopedClasses['hover:backdrop-brightness-100'];
    __VLS_styleScopedClasses['hover:border-[#1D3557]'];
    __VLS_styleScopedClasses['hover:bg-transparent'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['text-opacity-60'];
    __VLS_styleScopedClasses['font-nunito'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-[2.5rem]'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-400'];
    __VLS_styleScopedClasses['to-red-400'];
    __VLS_styleScopedClasses['bg-clip-text'];
    __VLS_styleScopedClasses['text-transparent'];
    __VLS_styleScopedClasses['font-nunito'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-3'];
    __VLS_styleScopedClasses['top-3'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['font-nunito'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['shadow-blue-300'];
    __VLS_styleScopedClasses['peer'];
    __VLS_styleScopedClasses['w-[2rem]'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['drop-shadow-2xl'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-11'];
    __VLS_styleScopedClasses['text-blue-200'];
    __VLS_styleScopedClasses['peer-hover:opacity-100'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-[70%]'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['border-[0.8px]'];
    __VLS_styleScopedClasses['border-blue-300'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['text-[1.5rem]'];
    __VLS_styleScopedClasses['font-nunito'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-400'];
    __VLS_styleScopedClasses['to-green-400'];
    __VLS_styleScopedClasses['bg-clip-text'];
    __VLS_styleScopedClasses['text-transparent'];
    __VLS_styleScopedClasses['break-words'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['text-[0.9rem]'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['font-nunito'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-400'];
    __VLS_styleScopedClasses['to-green-400'];
    __VLS_styleScopedClasses['bg-clip-text'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-transparent'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "taskRef": __VLS_nativeElements['h2'],
    };
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
            days: days,
            date: date,
            isEdit: isEdit,
            taskRef: taskRef,
            computedFunctionalIcon: computedFunctionalIcon,
            clickHandler: clickHandler,
        };
    },
    __typeEmits: {},
    props: ['task'],
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    props: ['task'],
});
;
