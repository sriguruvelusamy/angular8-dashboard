import * as EmployeeActions from "./employee_action";
import { IEmployee } from "./employee_model";

const initialState: IEmployeeStore = {
    data: []
}

export interface IEmployeeStore {
    data: Array<IEmployee>
}


export function employeeReducer(state = initialState, action: EmployeeActions.Actions) {
    switch (action.type) {
        case EmployeeActions.LOAD_DATA:
            return { ...state, data: action.payload};
        default:
            //console.log(state)
            return state;
    }
}