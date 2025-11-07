import { CSSProperties, PropsWithChildren, forwardRef, Ref, MutableRefObject } from 'react';
import { useReveal } from '../hooks/use-reveal';

type Variant = 'up' | 'left' | 'right';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  variant?: Variant;
  delay?: number;
  [key: string]: any;
};

const cls = (a?: string, b?: string) => [a, b].filter(Boolean).join(' ');

const variantClass: Record<Variant, string> = {
  up: 'reveal',
  left: 'reveal reveal-left',
  right: 'reveal reveal-right',
};

const Reveal = (
  { as = 'div', className, children, variant = 'up', delay = 0, ...rest }: PropsWithChildren<Props>,
  forwardedRef: Ref<HTMLDivElement>
) => {
  const internalRef = useReveal<HTMLDivElement>();
  const Comp = as as any;
  const style: CSSProperties = delay ? { transitionDelay: `${Math.max(0, delay)}ms` } : undefined;

  const setRef = (el: HTMLDivElement | null) => {
    // Attach to internal reveal observer
    (internalRef as any).current = el;
    // Forward to parent ref
    if (typeof forwardedRef === 'function') {
      forwardedRef(el);
    } else if (forwardedRef && typeof forwardedRef === 'object') {
      (forwardedRef as MutableRefObject<HTMLDivElement | null>).current = el;
    }
  };

  return (
    <Comp ref={setRef} className={cls(variantClass[variant], className)} style={style} {...rest}>
      {children}
    </Comp>
  );
};

export default forwardRef<HTMLDivElement, PropsWithChildren<Props>>(Reveal);
