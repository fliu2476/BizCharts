import React from 'react';
import { IBaseProps } from './Base';
export interface ICircleProps extends IBaseProps, React.Props<any> {
    attrs: {
        x?: number;
        y?: number;
        r?: number;
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ICircleProps, string | number> & React.RefAttributes<any>>;
export default _default;
