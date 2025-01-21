import { reactive } from "./reactive.js";
import { watch } from "./watch.js";

/* const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
}; */

const obj = {
    a: 1,
    b: 2
};

const state = reactive(obj);

watch(
    () => state.a + state.b,
    (newValue) => {
        console.log("state change", newValue);
    },
    {
        immediate: true
    }
);

state.a = 100;