import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export function LoadMore({ onClick }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Link
        sx={{ display: "inline-flex", flexDirection: "row", cursor: "pointer" }}
        onClick={onClick}
      >
        Load More
        <KeyboardArrowDownIcon />
      </Link>
    </Box>
  );
}
