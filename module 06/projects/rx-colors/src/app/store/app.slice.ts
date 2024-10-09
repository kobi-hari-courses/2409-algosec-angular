import { Color } from "../models/color.model";

export interface AppSlice {
    readonly results: Color[];
}

export const initialAppSlice: AppSlice = {
    results: [
        { code: "#ff0000", name: "red" },
        { code: "#00ff00", name: "green" },
        { code: "#0000ff", name: "blue" }
    ]
};