import React from 'react';
import { IBaseProps } from './Base';
export interface IImageProps extends IBaseProps, React.Props<any> {
    attrs: {
        /**
         * @example
         * // 数组形式: [ [ 'M', 100, 100 ], [ 'L', 200, 200 ] ]
         * // 字符串形式: M 100,100 L 200,200
         * @type {(string | any[])}
         */
        path?: string | any[];
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<IImageProps, string | number> & React.RefAttributes<any>>;
export default _default;
