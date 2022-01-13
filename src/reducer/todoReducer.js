
export const todoReducer = (state, action) => {

    switch (action.type) {
        case "add":
            console.log('Add red :', action.payload);
            return [
                ...state,
                action.payload
            ]
            break;

        case "edit": {

            console.log('Edit red :', action.payload);

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
            console.log('Remove red :', action.payload);
            return state.filter(item => item.id !== action.payload)
            break;


        case "done": {
            console.log('Done red :', action.payload);
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
            return state
            break;

    }
}
