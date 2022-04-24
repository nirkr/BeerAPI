import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import styles from "./ResourceItem.module.scss";

export function ResourceItem({ item }) {
  return (
    <Card className={styles.card} key={item.id}>
      <CardContent className={styles.imgWrapper}>
        <Tooltip title={`Ingredients: ${item.ingredients}`} placement="top">
          <img src={item.image} alt={item.name} className={styles.img}></img>
        </Tooltip>
      </CardContent>
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#FF8000">
          {item.tagline}
        </Typography>
        <Typography variant="body2">{item.tips}</Typography>
      </CardContent>
    </Card>
  );
}
