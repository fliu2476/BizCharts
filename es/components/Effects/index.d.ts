import React from 'react';
interface IEffectsProps extends React.Props<any> {
}
export default function Effects(props: IEffectsProps): React.ReactElement<unknown, string | ((props: any) => React.ReactElement<any, any>) | (new (props: any) => React.Component<any, any, any>)>;
export {};
