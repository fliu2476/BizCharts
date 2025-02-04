"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
// 注册 G 渲染引擎
var CanvasEngine = __importStar(require("@antv/g-canvas/lib"));
var SVGEngine = __importStar(require("@antv/g-svg/lib"));
var core_1 = require("@antv/g2/lib/core");
// 导出自定义比例尺的能力
var scale_1 = require("@antv/scale");
Object.defineProperty(exports, "registerScale", { enumerable: true, get: function () { return scale_1.registerScale; } });
Object.defineProperty(exports, "getScale", { enumerable: true, get: function () { return scale_1.getScale; } });
Object.defineProperty(exports, "registerTickMethod", { enumerable: true, get: function () { return scale_1.registerTickMethod; } });
require("./extend/scale/scale");
// 动画
require("./animations");
// 主题
__exportStar(require("./theme"), exports);
core_1.registerEngine('canvas', CanvasEngine);
core_1.registerEngine('svg', SVGEngine);
// @ts-ignore
__exportStar(require("@antv/g2/lib/core"), exports);
exports.VERSION = '4.1.11';
// fixme: supportCSSTransform 在g2@4.1.0 后支持
// 原始的计算坐标方法
var rawGetPointByClient = CanvasEngine.Canvas.prototype.getPointByClient;
CanvasEngine.Canvas.prototype.getPointByClient = function (clientX, clientY) {
    // 获取原函数返回的坐标值
    var raw = rawGetPointByClient.call(this, clientX, clientY);
    // 获取设定高宽和真实高宽。
    // 当设定的高宽不等于getBoundingClientRect获取的高宽时，说明存在缩放。
    var el = this.get('el');
    var bbox = el.getBoundingClientRect();
    var setWidth = this.get('width');
    var setHeight = this.get('height');
    var realWidth = bbox.width, realHeight = bbox.height;
    // 除以缩放比（真实高宽 / 设定高宽）获得真实的坐标。
    return {
        x: raw.x / (realWidth / setWidth),
        y: raw.y / (realHeight / setHeight),
    };
};
// 设置全局默认的error fallback
var ErrorBoundary_1 = require("./boundary/ErrorBoundary");
Object.defineProperty(exports, "setDefaultErrorFallback", { enumerable: true, get: function () { return ErrorBoundary_1.setDefaultErrorFallback; } });
//# sourceMappingURL=core.js.map