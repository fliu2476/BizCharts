var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import RootChartContext from '../../context/root';
import ChartViewContext from '../../context/view';
import ViewHelper from './viewHelper';
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'view';
        return _this;
    }
    View.prototype.componentWillUnmount = function () {
        this.viewHelper.destroy();
        this.viewHelper = null;
    };
    View.prototype.render = function () {
        if (!this.viewHelper) {
            this.viewHelper = new ViewHelper(this.context.chart);
        }
        this.viewHelper.update(this.props);
        return (React.createElement(ChartViewContext.Provider, { value: this.viewHelper.view },
            React.createElement(React.Fragment, null, this.props.children)));
    };
    View.defaultProps = {
        visible: true,
        preInteractions: [],
        filter: [],
    };
    return View;
}(React.Component));
export { View };
View.contextType = RootChartContext;
export default View;
//# sourceMappingURL=index.js.map