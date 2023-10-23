import { Fragment } from "react";
import { SkeletonBase } from "./style";

// proejct
import { Box } from "..";

// type
import { ChildrenAlias, ComponentProps } from "@/types/Common";

interface SkeletonProps extends ComponentProps {
  rounded?: boolean;
}

interface SkeletonWrapper extends ComponentProps {
  children: ChildrenAlias;
}

export const Skeleton = ({ rounded = false, sx }: SkeletonProps) => {
  return (
    <Fragment>
      <SkeletonBase $rounded={rounded} $sx={sx}>
        &nbsp;
      </SkeletonBase>
    </Fragment>
  );
};

Skeleton.Wrapper = ({ className, children, sx }: SkeletonWrapper) => {
  return (
    <Box className={className} sx={{ ...sx }}>
      {children}
    </Box>
  );
};
