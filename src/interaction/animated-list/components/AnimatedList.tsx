import {
  Children,
  cloneElement,
  ComponentProps,
  HtmlHTMLAttributes,
  isValidElement,
  ReactElement,
} from 'react';
import AnimatedListItem from './AnimatedListItem';

type AnimateListItemComponent = ReactElement<
  ComponentProps<typeof AnimatedListItem>
>;

type Props = Omit<HtmlHTMLAttributes<HTMLDivElement>, 'children'> & {
  children: AnimateListItemComponent[] | AnimateListItemComponent;
};

export default function AnimatedList({ children: _children, ...props }: Props) {
  const children = Children.map(_children, (child, index) => {
    if (isValidElement(child) && child.type === AnimatedListItem) {
      return cloneElement(child as AnimateListItemComponent, {
        index,
      });
    }

    return null;
  });

  return <div {...props}>{children}</div>;
}
