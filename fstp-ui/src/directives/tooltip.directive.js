import { Directive, directive } from 'lit/directive.js';
import { tooltip as tt } from 'fstp-ui/src/functions';
class TooltipDirective extends Directive {
    render(message, placement) {
        const target = this._$parent?.element;
        if (!target)
            return;
        tt({
            el: target,
            message: message,
            placement: placement ?? 'top',
        });
    }
}
export const tooltip = directive(TooltipDirective);
