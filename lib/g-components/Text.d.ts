import React from 'react';
import { IBaseProps } from './Base';
export interface ITextProps extends IBaseProps, React.Props<any> {
    attrs: {
        x?: number;
        y?: number;
        text?: number;
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ITextProps, string | number> & React.RefAttributes<any>>;
export default _default;
