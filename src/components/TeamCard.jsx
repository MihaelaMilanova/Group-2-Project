import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const TeamCard = ({ name, title, description }) => (
  <Card sx={{ backgroundColor: '#fff0f5', borderRadius: 3 }}>
    <Box sx={{ height: 150, backgroundColor: '#e53935', borderRadius: '50%', m: 2 }} />
    <CardContent>
      <Typography variant="subtitle1" align="center" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
        {name}
      </Typography>
      <Typography variant="body2" align="center" sx={{ color: '#f06292', fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default TeamCard;
