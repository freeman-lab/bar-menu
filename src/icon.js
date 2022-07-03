import React from "react";
import { Box } from "theme-ui";

const Icon = ({ ...props }) => {
  const style = {
    strokeWidth: "3px",
    vectorEffect: "non-scaling-stroke",
    strokeLinecap: "round",
  };
  return (
    <Box
      as="svg"
      viewBox="0 0 48 24"
      fill="none"
      width="48"
      height="24"
      stroke="currentColor"
      sx={{ display: "block" }}
      {...props}
    >
      <line x1="12" x2="24" y1="16" y2="8" style={style} />
      <line x1="24" x2="36" y1="8" y2="16" style={style} />
    </Box>
  );
};

export default Icon;
