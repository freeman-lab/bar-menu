import React from "react";
import { Box } from "theme-ui";
import Row from "./row";
import Column from "./column";
import { COLORS } from "./constants";

const Filter = ({ label, keys, values, setValues }) => {
  return (
    <Box
      sx={{
        fontSize: [2, 3, 3, 3],
        mt: [5, 5, 5, 6],
        mb: [4, 4, 4, 5],
      }}
    >
      {label}:{" "}
      {keys.map((d, i) => {
        return (
          <span key={i}>
            <Box
              as="span"
              sx={{
                cursor: "pointer",
                color: values[d] && COLORS[d] ? COLORS[d] : "text",
                textDecoration: values[d] ? "underline" : "none",
                userSelect: "none",
              }}
              onClick={() =>
                setValues((prev) => {
                  if (d === "all") {
                    const obj = {};
                    Object.keys(values).forEach((k) => {
                      obj[k] = true;
                    });
                    return obj;
                  } else {
                    const obj = {};
                    Object.keys(values).forEach((k) => {
                      obj[k] = false;
                    });
                    obj[d] = true;
                    return obj;
                  }
                })
              }
            >
              {d}
            </Box>
            {i < keys.length - 1 && <Box as="span"> • </Box>}
          </span>
        );
      })}
    </Box>
  );
};

export default Filter;
