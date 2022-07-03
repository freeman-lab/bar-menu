import React from "react";
import { Box } from "theme-ui";
import Row from "./row";
import Column from "./column";
import Filter from "./filter";
import { FAMILIES, KEYWORDS } from "./constants";
import Icon from "./icon";

const Wrapper = ({ children, settings, setSettings }) => {
  return (
    <>
      <Row sx={{ display: ["none", "grid", "grid", "grid"] }}>
        <Column start={[1, 4, 7, 7]} width={[6, 4, 4, 4]}>
          <Box
            sx={{
              mt: [6, 6, 6, 7],
              mb: [5, 5, 5, 6],
              display: "initial",
            }}
          >
            {children}
          </Box>
        </Column>
      </Row>
      <Box
        sx={{
          position: "fixed",
          bg: "background",
          bottom: 0,
          left: 0,
          height: settings ? "240px" : "66px",
          display: ["initial", "none", "none", "none"],
          zIndex: 1000,
          transition: "height 0.2s",
          boxShadow: ({ colors }) => `0px 0px 20px 20px ${colors.background}`,
          borderTop: ({ colors }) => `solid 1px ${colors.muted}`,
        }}
      >
        <Box
          sx={{
            pt: [3],
            pb: [4],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setSettings((prev) => !prev)}
        >
          <Icon
            sx={{
              transition: "opacity 0.2s, transform 0.2s",
              color: "primary",
              opacity: settings ? 1 : 0.5,
              transform: settings ? "scaleY(-1)" : "",
            }}
          />
        </Box>
        <Box
          sx={{
            px: [3],
            mt: [-4],
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

const Settings = ({
  families,
  setFamilies,
  keywords,
  setKeywords,
  settings,
  setSettings,
}) => {
  return (
    <Wrapper settings={settings} setSettings={setSettings}>
      <Filter
        label="Families"
        keys={Object.keys(FAMILIES)}
        values={families}
        setValues={setFamilies}
      />
      <Filter
        label="Liquor"
        keys={Object.keys(KEYWORDS)}
        values={keywords}
        setValues={setKeywords}
      />
    </Wrapper>
  );
};

export default Settings;
