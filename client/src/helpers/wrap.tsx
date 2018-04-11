import * as React from 'react';
import * as classNames from 'classnames';

const recursivelyModifyChildren = (children: React.ReactNode) => {
    return React.Children.map(children, child => {
        // tslint:disable-next-line:no-any
        if (!React.isValidElement<any>(child)) {
            return child;
        }

        // tslint:disable-next-line:no-any
        const className = classNames(
            child.props.className,
            'balki-test',
            Object.keys(child.props).some(k => k.startsWith('on'))
                ? 'event-source'
                : false
        );

        const childProps = {
            ...child.props,
            className: className
        };

        childProps.children = recursivelyModifyChildren(child.props.children);

        return React.cloneElement(child, childProps);
    });
};

class Wrapper extends React.Component<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    render() {
        return (
            recursivelyModifyChildren(this.props.children)
        );
    }
}

// tslint:disable-next-line:no-any
export default (WrappedComponent: any) => {
    // tslint:disable-next-line:no-any
    return class extends React.Component<any, any> {
        render() {
            return (
                <Wrapper>
                    <WrappedComponent {...this.props} />
                </Wrapper>
            );
        }
    };
};