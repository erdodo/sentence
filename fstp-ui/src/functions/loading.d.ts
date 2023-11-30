export declare function loading({ el, state, option }: ILoadingParams): void;
export interface ILoadingParams {
    el: HTMLElement | string;
    state: boolean;
    option?: ILoadingOption;
}
export interface ILoadingOption {
    opacity?: string;
    zIndex: string;
    backgroundColor?: string;
    className?: string;
}
