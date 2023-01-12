import { IFreteiro } from "../interfaces";

export function isFreteiro(obj: any): obj is IFreteiro {
    return "endereco" in obj;
}