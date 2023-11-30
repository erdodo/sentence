import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface MoleculeDrawerProps {
    fIsOpen?: boolean;
    fIcon: AtomIconsEnum;
    fIconType?: AtomIconsTypeEnum;
    fTitle?: string;
    fHasTitle?: boolean;
    fDescription?: string;
    fHasDescription?: boolean;
    fHasCloseButton?: boolean;
    fIsCloseOnOutsideClick?: boolean;
    fId?: string;
    slot?: Node;
    slotFooter?: Node;
    fOpened?: EventDispatcher<LitElement>;
    fClosed?: EventDispatcher<LitElement>;
}
