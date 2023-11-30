import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { AtomIconsEnum, AtomIconsTypeEnum } from '../../icon/icon.model';
export interface AtomWidgetMoreButtonProps {
    fDisabled?: boolean;
    fClick?: EventDispatcher<LitElement>;
    fFirst?: boolean;
    fLast?: boolean;
    fIcon?: AtomIconsEnum;
    fIconType?: AtomIconsTypeEnum;
}
