import React from 'react';
import Carousel from 'react-material-ui-carousel'

function Carousel(props)
{
    
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

const membersData =[
  {
    name: "Jessie 'Juice' Rivera",
    title: "The Flavor Wizard",
    description: "Our mastermind of all things fruity—dreaming up bold and juicy blends.",
  },
  {
    name: "Milo Tan",
    title: "The Vibe Curator",
    description: "From dreamy pastel palletes to can design that pop, Milo makes sure every visual moment feels fresh and totally Feasty.",
  },
  {
    name: "Sami Patel",
    title: "The Smoothie Scientist",
    description: "A health nut with a heart of gold, Sami's all about crafting smoothies that taste amazing and make you feel great.",
  }
];