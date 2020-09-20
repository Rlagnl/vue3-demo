import { ref, watchEffect } from 'vue'

export function useCounter () {
    let count = ref(0)
    watchEffect(() => console.warn( 'useCounter', count.value ))
    function onclick() {
        count.value++
    }
    return {
        count,
        onclick
    }
};
