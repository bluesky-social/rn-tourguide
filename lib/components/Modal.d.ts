import * as React from 'react';
import { Animated, LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import { BorderRadiusObject, IStep, Labels, ValueXY } from '../types';
import { TooltipProps } from './Tooltip';
export interface ModalProps {
    ref: any;
    currentStep?: IStep;
    visible?: boolean;
    isFirstStep: boolean;
    isLastStep: boolean;
    animationDuration?: number;
    tooltipComponent: React.ComponentType<TooltipProps>;
    tooltipStyle?: StyleProp<ViewStyle>;
    maskOffset?: number;
    borderRadius?: number;
    borderRadiusObject?: BorderRadiusObject;
    androidStatusBarVisible: boolean;
    backdropColor: string;
    labels: Labels;
    dismissOnPress?: boolean;
    easing: (value: number) => number;
    stop: () => void;
    next: () => void;
    prev: () => void;
    preventOutsideInteraction?: boolean;
}
interface Layout {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
interface State {
    isFirstStep: boolean;
    isLastStep: boolean;
    tooltip: object;
    notAnimated?: boolean;
    containerVisible: boolean;
    layout?: Layout;
    size?: ValueXY;
    position?: ValueXY;
    tooltipTranslateY: Animated.Value;
    opacity: Animated.Value;
    currentStep?: IStep;
}
interface Move {
    top: number;
    left: number;
    width: number;
    height: number;
}
export declare class Modal extends React.Component<ModalProps, State> {
    static defaultProps: {
        easing: import("react-native").EasingFunction;
        animationDuration: number;
        tooltipComponent: any;
        tooltipStyle: {};
        androidStatusBarVisible: boolean;
        backdropColor: string;
        labels: {};
        isHorizontal: boolean;
        preventOutsideInteraction: boolean;
    };
    layout?: Layout;
    state: {
        isFirstStep: boolean;
        isLastStep: boolean;
        tooltip: {};
        containerVisible: boolean;
        tooltipTranslateY: Animated.Value;
        opacity: Animated.Value;
        layout: undefined;
        size: undefined;
        position: undefined;
        currentStep: undefined;
    };
    constructor(props: ModalProps);
    componentDidUpdate(prevProps: ModalProps): void;
    handleLayoutChange: ({ nativeEvent: { layout } }: LayoutChangeEvent) => void;
    measure(): Promise<Layout>;
    _animateMove(obj?: Move): Promise<void>;
    animateMove(obj?: {}): Promise<void>;
    reset(): void;
    handleNext: () => void;
    handlePrev: () => void;
    handleStop: () => void;
    renderMask: () => JSX.Element;
    renderTooltip(): JSX.Element | null;
    renderNonInteractionPlaceholder(): JSX.Element | null;
    render(): JSX.Element | null;
}
export {};
