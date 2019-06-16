export function reduxChangeListener<T extends object, R>($ngRedux: { getState: () => T }, selector: (state: T) => R, callback: (currentState: R, previousState: R | undefined) => void) {
    let previousStatePart: R | undefined = selector($ngRedux.getState());
    return function () {
        const currentStatePart = selector($ngRedux.getState());
        if (currentStatePart !== previousStatePart) {
            callback(currentStatePart, previousStatePart)
            previousStatePart = currentStatePart;
        }
    };
}
