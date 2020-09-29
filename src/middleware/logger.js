
const logger = (store) => (next) => (action) =>{
    console.group(action.type);
    store =   next(action);
    console.log(" The next state is ", store);
    console.groupEnd()
    return store;
}

export default logger;