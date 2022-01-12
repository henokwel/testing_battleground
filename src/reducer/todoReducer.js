
export const todoReducer = (state, action) => {

    switch (action.type) {
        case "add":
            console.log("add");
            return [
                ...state,
                action.payload
            ]
            break;

        case "edit": {
            console.log("type", action.type);
            console.log("payload", action.payload);

            const newStat = state.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }
                return item
            })

            return state = newStat
        }
            break;

        case "remove":
            return state.filter(item => item.id !== action.payload.id)
            break;

        case "done": {
            console.log("type", action.type);
            console.log("payload", action.payload);

            const newStat = state.map(item => {
                if (item.id === action.payload.id) {
                    item.done = action.payload.done
                }
                return item
            })

            return state = newStat
        }

        default:
            break;

    }
}
