import { Subject } from "observational";
export declare function useSubject<T>(subject: Subject<T>): [T, (value: T) => void];
