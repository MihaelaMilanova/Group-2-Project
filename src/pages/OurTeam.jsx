import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: 'Jessie "Juice" Rivera',
    title: 'The Flavor Wizard',
    description: 'Our mastermind of all things fruity, always dreaming up bold and juicy blends.',
  },
  {
    name: 'Milo Tan',
    title: 'The Vibe Curator',
    description: 'From dreamy pastel palettes to can designs that pop, Milo makes sure every visual moment feels fresh and totally Feasty.',
  },
  {
    name: 'Sami Patel',
    title: 'The Smoothie Scientist',
    description: 'A health nut with a heart of gold, Sami’s all about crafting smoothies that taste amazing and make you feel great.',
  },
];

const OurTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: !isMobile,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        backgroundColor: '#F0D7DB',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 6,
          color: '#f48fb1',
          fontFamily: 'Pacifico, cursive',
        }}
      >
        Our Team
      </Typography>

      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          width: '100%',
          px: 1,
          boxSizing: 'border-box',
        }}
      >
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <Box key={index} sx={{ px: 2, boxSizing: 'border-box' }}>
              <Card
                sx={{
                  borderRadius: '20px',
                  py: 4,
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: '#ec1b2e',
                    marginBottom: 3,
                    mx: 'auto',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#e91e63', fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default OurTeam;
