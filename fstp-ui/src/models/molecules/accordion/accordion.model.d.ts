import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IMoleculeAccordionProps {
    fItems?: IMoleculeAccordionItemProps[];
    fIsMultiple?: boolean;
    fChange?: EventDispatcher<IMoleculeAccordionItemProps[]>;
    fClick?: EventDispatcher<IMoleculeAccordionItemProps>;
}
export interface IMoleculeAccordionItemProps<fData = any> {
    fTitle?: string;
    fIsOpen?: boolean;
    fDisabled?: boolean;
    fKey?: number;
    fValue?: string;
    fData?: fData;
}
