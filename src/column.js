import React from "react";
import { Box } from "theme-ui";

const Column = ({ start, width, children, sx, ...props }) => {
  let end;

  if (Array.isArray(start) && Array.isArray(width)) {
    end = start.map((d, i) => d + width[i]);
  } else {
    end = start + width;
  }
  return (
    <Box sx={{ gridColumnStart: start, gridColumnEnd: end, ...sx }} {...props}>
      {children}
    </Box>
  );
};

export default Column;
