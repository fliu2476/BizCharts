import React from 'react';
import { IBaseProps } from './Base';
export interface IRectProps extends IBaseProps, React.Props<any> {
    attrs: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        radius?: number;
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<IRectProps, string | number> & React.RefAttributes<any>>;
export default _default;
