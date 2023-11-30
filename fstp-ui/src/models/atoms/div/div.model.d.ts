export interface IAtomDivProps {
    fDisplay?: AtomDivDisplayEnum;
    fFlexDirection?: AtomDivFlexDirectionEnum;
    fFlexJustifyContent?: AtomDivFlexJustifyContentEnum;
    fFlexAlignItems?: AtomDivFlexJustifyContentEnum;
    fFlexWrap?: boolean;
    fGridColumnCount?: number;
    fShadow?: boolean;
    fBorder?: boolean;
    fBorderRadius?: boolean;
    fPadding?: number;
    fMargin?: number;
    fBackgroundColor?: string;
    fColor?: string;
    fFontSize?: string;
    fTextAlign?: AtomDivTextAlignEnum;
}
export declare enum AtomDivDisplayEnum {
    FLEX = "flex",
    BLOCK = "block",
    GRID = "grid"
}
export declare enum AtomDivFlexDirectionEnum {
    COLUMN = "column",
    ROW = "row"
}
export declare enum AtomDivFlexJustifyContentEnum {
    BETWEEN = "space-between",
    AROUND = "space-around",
    EVENLY = "space-evenly",
    START = "flex-start",
    END = "flex-end",
    CENTER = "center"
}
export declare enum AtomDivFlexAlignItemsEnum {
    START = "flex-start",
    END = "flex-end",
    CENTER = "center",
    BASELINE = "baseline",
    STRETCH = "stretch"
}
export declare enum AtomDivTextAlignEnum {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}
