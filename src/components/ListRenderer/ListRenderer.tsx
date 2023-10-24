// type
import type { ChildrenAlias } from "@/types/Common";

interface ListRendererProps<Item> {
  className?: string;
  items: Item[];
  renderProps: (item: Item) => ChildrenAlias;
}

export const ListRenderer = <Item,>({
  className,
  items,
  renderProps,
}: ListRendererProps<Item>) => {
  return (
    <div className={className}>
      {items.map((item: Item, idx: number) => (
        <div key={idx}>{renderProps(item)}</div>
      ))}
    </div>
  );
};
