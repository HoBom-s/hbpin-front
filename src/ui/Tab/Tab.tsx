import { MouseEvent } from "react";
import { TabBase, TabIndicatorBase } from "./style";
import { Text } from "..";

// type
import type { ComponentProps } from "@/types/Common";

interface TabProps<T> extends ComponentProps {
  label: string;
  value: T;
  selected?: boolean;
  onChange?: (e: MouseEvent, value: T) => void;
}

export const Tab = <T,>({
  label,
  value,
  selected = false,
  className,
  sx,
  onChange,
}: TabProps<T>) => {
  const handleTabClick = (e: MouseEvent) => {
    if (onChange) {
      onChange(e, value);
    }
  };

  if (selected) {
    return (
      <TabBase className={className} onClick={handleTabClick}>
        <Text sx={sx}>{label}</Text>
        <TabIndicatorBase />
      </TabBase>
    );
  } else {
    return (
      <TabBase className={className} onClick={handleTabClick}>
        <Text sx={sx}>{label}</Text>
      </TabBase>
    );
  }
};
