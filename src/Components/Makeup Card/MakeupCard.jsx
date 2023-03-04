import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MakeupCard({
  name,
  brand,
  price,
  image_link,
  description,
  id,
}) {
  return (
    <Card sx={{ maxWidth: 400, minHeight: 600 }}>
      <CardMedia
        sx={{ width: 200 }}
        component="img"
        src={image_link}
        title={name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          variant="body3"
          color="text.primary"
        >
          {brand}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
        <Typography
          variant="body3"
          color="text.primary"
        >
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
