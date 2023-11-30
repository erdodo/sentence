import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IMoleculeTitleWidgetProps {
    fTitle?: string;
    fTitleSize?: string;
    fTitleIsBold?: boolean;
    fTitleColor?: string;
    fTitleIsItalic?: boolean;
    fIcon?: AtomIconsEnum;
    fClickSave?: EventDispatcher<string>;
}
