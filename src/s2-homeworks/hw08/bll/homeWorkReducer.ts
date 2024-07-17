import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to
    // fix any
    switch (action.type) {
        case 'sort': { // by name
            let newCopy= state;
            newCopy.sort((a,b)=>(action.payload==='up')? (a.age>b.age? 1: -1): (a.age<b.age? 1: -1));
                return newCopy

        }
        case 'check': {
           const newFilter= state.filter(st=>st.age >= action.payload)
            return newFilter // need to fix
        }
        default:
            return state
    }
}


