import { MouseEvent, Children, ReactElement, cloneElement } from "react";
import { TabsBase, TabsScroller, FlexWrapper } from "./style";

// assets
import { theme } from "@/assets";

// type
import type { ComponentProps } from "@/types/Common";

interface TabsProps<T> extends ComponentProps {
  children: ReactElement[];
  fullWidth?: boolean;
  value: T;
  onChange?: (e: MouseEvent, selectedTab: T) => void;
}

export const Tabs = <T,>({
  children,
  className,
  sx,
  fullWidth = false,
  value,
  onChange,
}: TabsProps<T>) => {
  const childTabItems: ReactElement[] = Children.map(
    children,
    (child: ReactElement) => {
      const childValue = child.props.value;
      const selectedTab: boolean = childValue === value;

      return cloneElement(child, {
        selected: selectedTab,
        value: childValue,
        sx: {
          padding: "8px 18px",
          color: theme.colors.black900,
          fontWeight: selectedTab
            ? theme.font.weight.fw700
            : theme.font.weight.fw400,
        },
        onChange: onChange,
      });
    },
  );

  return (
    <TabsBase $fullWidth={fullWidth} className={className} $sx={sx}>
      <TabsScroller>
        <FlexWrapper>{childTabItems}</FlexWrapper>
      </TabsScroller>
    </TabsBase>
  );
};
