const useDebounce = (fn: Function, delay: number) => {
    let timerID: ReturnType<typeof setTimeout>;
    return (...args: []) => {
        if (timerID) clearTimeout(timerID);
        timerID = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

export default useDebounce