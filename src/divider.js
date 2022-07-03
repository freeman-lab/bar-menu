import React from "react";
import Row from "./row";
import Column from "./column";

const Divider = () => {
  return (
    <Row>
      <Column
        start={[1, 1, 2, 2]}
        width={[6, 4, 5, 5]}
        sx={{
          pb: [3],
          opacity: 0.75,
          borderBottom: ({ colors }) => `solid 1px ${colors.muted}`,
        }}
      />
      <Column
        start={[1, 5, 7, 7]}
        width={[6, 4, 5, 5]}
        sx={{
          pb: [3],
          opacity: 0.75,
          borderBottom: ({ colors }) => `solid 1px ${colors.muted}`,
          display: ["none", "initial", "initial", "initial"],
        }}
      />
    </Row>
  );
};

export default Divider;
