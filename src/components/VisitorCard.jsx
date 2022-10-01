import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const VisitorCard = ({ visitor }) => {
  const {
    id,
    role
  } = visitor;
  return (
    <Card
      sx={{
        maxWidth: '900px',
        textAlign: 'center'
      }}
    >
      <CardContent>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant="p">{id}</Typography>
          <Typography variant='p'>{role}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default VisitorCard;