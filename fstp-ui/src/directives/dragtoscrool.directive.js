import { Directive, directive } from 'lit/directive.js';
import { dragtoscrool as dts } from 'fstp-ui/src/functions';
class DragtoscroolDirectiveDirective extends Directive {
    render() {
        const target = this._$parent?.element;
        if (!target)
            return;
        dts(target);
    }
}
export const dragtoscrool = directive(DragtoscroolDirectiveDirective);
