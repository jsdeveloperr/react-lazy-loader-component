/* eslint-disable react/no-children-prop */
import React, { useRef, ReactNode, ComponentType, CSSProperties } from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  threshold?: number | number[];
  rootMargin?: string;
  root?: null;
  freezeOnceVisible?: boolean;
  tag?: ComponentType | keyof JSX.IntrinsicElements;
}

export const LazyLoad = ({ children, className, style, tag = 'div', threshold = 0, rootMargin = '0%', root = null, freezeOnceVisible = false }: LazyLoadProps) => {
  const Tag: any = tag;
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    root,
    rootMargin,
    threshold,
    freezeOnceVisible
  });
  const isVisible = !!entry?.isIntersecting;

  return <Tag className={`${className}`} style={style} ref={ref} children={isVisible ? children : null} />;
};

export default LazyLoad;
