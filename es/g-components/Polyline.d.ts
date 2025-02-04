import React from 'react';
import { IBaseProps } from './Base';
export interface IPolylineProps extends IBaseProps, React.Props<any> {
    attrs: {
        points?: [number, number][];
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<IPolylineProps, string | number> & React.RefAttributes<any>>;
export default _default;
