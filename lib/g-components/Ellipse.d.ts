import React from 'react';
import { IBaseProps } from './Base';
export interface IEllipseProps extends IBaseProps, React.Props<any> {
    attrs: {
        x?: number;
        y?: number;
        rx?: number;
        ry?: number;
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<IEllipseProps, string | number> & React.RefAttributes<any>>;
export default _default;
