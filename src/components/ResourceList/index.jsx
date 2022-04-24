import React from "react";
import { ResourceItem } from "../ResourceItem/index";
import { Grid } from "@mui/material";

export function ResourceList({ list }) {
  return (
    <Grid
      container
      direction="row"
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, md: 8 }}
      justifyContent="center"
    >
      {list.map((beerItem, index) => (
        <Grid item xs={4} key={index}>
          <ResourceItem item={beerItem} />
        </Grid>
      ))}
    </Grid>
  );
}
