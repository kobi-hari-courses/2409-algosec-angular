import { Color } from "../models/color.model";

export interface AppSlice {
    readonly results: Color[];
    readonly busy: boolean;
}

export const initialAppSlice: AppSlice = {
    results: [
    ], 
    busy: false
};