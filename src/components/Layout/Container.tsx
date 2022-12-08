import React, { forwardRef } from 'react';
import clsx from 'clsx';

type Props = {
    className?: string,
    children: React.ReactNode
}

export const OuterContainer = forwardRef(function OuterContainer(
    { className, children, ...props }: Props,
    ref: React.Ref<HTMLDivElement>
) {
    return (
        <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
            <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
        </div>
    )
})

export const InnerContainer = forwardRef(function InnerContainer(
    { className, children, ...props }: Props,
    ref: React.Ref<HTMLDivElement>
) {
    return (
        <div
            ref={ref}
            className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
            {...props}
        >
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
    )
})

export default React.forwardRef(function Container(
    { children, ...props }: Props,
    ref: React.Ref<HTMLDivElement>
) {
    return (
        <OuterContainer ref={ref} {...props}>
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    )
})
