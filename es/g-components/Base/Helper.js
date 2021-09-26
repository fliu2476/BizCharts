var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import forIn from '@antv/util/lib/for-in';
import isFunction from '@antv/util/lib/is-function';
import pickWithout from '../../utils/pickWithout';
import { REACT_PIVATE_PROPS } from '../../utils/constant';
import cloneDeep from '../../utils/cloneDeep';
import { EVENTS } from './events';
var Helper = /** @class */ (function () {
    function Helper(shape) {
        this.shape = shape;
    }
    Helper.prototype.createInstance = function (props) {
        this.instance = props.group.addShape(this.shape, pickWithout(props, ['group', 'ctx']));
    };
    ;
    Helper.prototype.destroy = function () {
        if (this.instance) {
            this.instance.remove(true);
            this.instance = null;
        }
    };
    Helper.prototype.update = function (props) {
        var _this = this;
        var newConfig = pickWithout(props, __spreadArrays(REACT_PIVATE_PROPS));
        this.destroy();
        this.createInstance(newConfig);
        var attrs = newConfig.attrs, animate = newConfig.animate, isClipShape = newConfig.isClipShape, visible = newConfig.visible, matrix = newConfig.matrix, others = __rest(newConfig, ["attrs", "animate", "isClipShape", "visible", "matrix"]);
        this.instance.attr(attrs);
        if (animate) {
            var toAttrs = animate.toAttrs, animateCfg = __rest(animate, ["toAttrs"]);
            this.instance.animate(toAttrs, animateCfg);
        }
        if (isClipShape) {
            this.instance.isClipShape();
        }
        if (visible === false) {
            this.instance.hide();
        }
        if (matrix) {
            this.instance.setMatrix(matrix);
        }
        forIn(EVENTS, function (v, k) {
            if (isFunction(others[k])) {
                _this.instance.on(v, others[k]);
            }
        });
        this.config = cloneDeep(newConfig);
    };
    return Helper;
}());
export default Helper;
//# sourceMappingURL=Helper.js.map