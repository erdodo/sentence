import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface AtomDashboardToolButtonProps {
    fTooltip?: string;
    fIconIsFill?: boolean;
    fIcon?: AtomIconsEnum;
    fClick?: EventDispatcher<LitElement>;
}
