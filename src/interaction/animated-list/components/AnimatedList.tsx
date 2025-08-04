import {
  Children,
  cloneElement,
  ComponentProps,
  HtmlHTMLAttributes,
  isValidElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import AnimatedListItem from './AnimatedListItem';

type AnimateListItemComponent = ReactElement<
  ComponentProps<typeof AnimatedListItem>
>;

type Props = Omit<HtmlHTMLAttributes<HTMLDivElement>, 'children'> & {
  children: AnimateListItemComponent[] | AnimateListItemComponent;
};

export default function AnimatedList({ children: _children, ...props }: Props) {
  const isFistRender = useRef<boolean>(true);

  const [isChangedChildren, setIsChangedChildren] = useState<boolean>(false);

  const children = Children.map(_children, (child, index) => {
    if (isValidElement(child) && child.type === AnimatedListItem) {
      return cloneElement(child as AnimateListItemComponent, {
        index,
        isDelayRemove: isChangedChildren,
      });
    }

    return null;
  });

  useEffect(() => {
    if (isFistRender.current) {
      isFistRender.current = false;
      return;
    }
    setIsChangedChildren(true);
  }, [_children]);

  return <div {...props}>{children}</div>;
}
