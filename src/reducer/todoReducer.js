
export const todoReducer = (state, action) => {

    switch (action.type) {
        case "add":
            return [
                ...state,
                action.payload
            ]
            break;

        case "edit": {
            console.log("type", action.type);
            console.log("payload Edit", action.payload);

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
            return state.filter(item => item.id !== action.payload)
            break;
            

        case "done": {
            console.log("type", action.type);
            console.log("payload", action.payload);

            return state.map(item => {

                // if (item.id === action.payload.id) {
                //     return {
                //         ...item,
                //         ...action.payload.done
                //     };
                // } else {
                //     return item;
                // };

                if (item.id === action.payload.id) {
                    item.done = action.payload.done
                }
                return item
            })

        }

        default:
            break;

    }
}
