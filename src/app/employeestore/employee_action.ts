import { Action } from '@ngrx/store';
import { IEmployee } from './employee_model';

export const LOAD_DATA = "[EMP] LOAD_DATA";



export class LoadEmployees implements Action {
    readonly type = LOAD_DATA;
    constructor(public payload: Array<IEmployee>) {

    }
}

export type Actions = LoadEmployees;