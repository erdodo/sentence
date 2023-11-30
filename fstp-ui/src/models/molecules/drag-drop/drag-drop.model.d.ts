import { IAtomDivProps, IAtomSelectItem } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IMoleculeDragDropProps {
    paletteItems: IMoleculeDragDropItemProperties[];
    fJsonOutput?: EventDispatcher<IMoleculeDragDropPanelItems>;
}
export interface IMoleculeDragDropPanelItems {
    [id: string]: IMoleculeDragDropItemProperties;
}
export interface IMoleculeDragDropItemProperties {
    type?: string;
    fLabel?: string;
    fName: string;
    fValue?: string;
    fItems?: IAtomSelectItem[];
    id?: string;
    fStatus?: string;
    divProps?: IAtomDivProps;
    start?: number;
    end?: number;
    short?: number;
}
