import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IMoleculeToolsProps {
    fItems?: IMoleculeItems[];
    fClick?: EventDispatcher<IMoleculeItems>;
}
export interface IMoleculeItems<fData = any> {
    fTooltip?: string;
    fIcon: AtomIconsEnum;
    fKey?: number;
    fValue?: string;
    fData?: fData;
}
