import BaseComponent from 'fstp-ui/src/components/base.component';
import { AtomListIconBgStatus, AtomListSizeEnum, AtomListStatusEnum, AtomListTypeEnum } from 'fstp-ui/src/models/atoms';
import { TemplateResult } from 'lit';
export declare class AtomListComponent extends BaseComponent {
    fType: AtomListTypeEnum;
    fLiClass: string;
    fItems: string[];
    fSize: AtomListSizeEnum;
    fStatus: AtomListStatusEnum;
    status: AtomListIconBgStatus;
    protected render(): TemplateResult;
}
export declare const List: import("@lit/react").ReactWebComponent<AtomListComponent, {}>;
