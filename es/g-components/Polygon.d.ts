import React from 'react';
import { IBaseProps } from './Base';
export interface IPolygonProps extends IBaseProps, React.Props<any> {
    attrs: {
        points?: [number, number][];
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<IPolygonProps, string | number> & React.RefAttributes<any>>;
export default _default;
