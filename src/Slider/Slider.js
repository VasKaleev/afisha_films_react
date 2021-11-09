import "./Slider.css";
import React from 'react';
import Carousel from 'react-elastic-carousel';
//import Rating from "material-ui-rating";
import Item from "../Item/Item.js";
import bmaks from "../Img/bmaks.png";
import cremd from "../Img/cremd.png"
import starw from "../Img/starw.png"


const Films = [
  {
    id: 1,
    photo: bmaks,
    name: "Безумный макс",
    rayting: 3.5,
  },
  {
    id: 2,
    photo: cremd,
    name: "Кремневая долина",
    rayting: 4,
  }, 
  {
    id: 3,
    photo: starw,
    name: "Звездные войны",
    rayting: 3.5,
  },
];

/* class Slider extends React.Component {
    state = {
      items: [
        {id: 1, photo: bmaks},
        {id: 2, photo: cremd},
        {id: 3, photo: starw}
      ]
    }

    render () {
      const { items } = this.state;
      return (
        <div className="Slider-site-slider">
          <div>{Films.map(item=><div key={item.id}>{item.photo}</div>)}</div>
          <div>{bmaks}</div>
        <Carousel itemsToShow={3}>
             <Item>{items.photo}</Item>    
        </Carousel>
        </div>
      )
    }
  } */
  function Slider() {
    return(
      
        <div className="Slider-site-slider">
                   {/*  <img src={bmaks} /> */}
                   {/*  {Films.map(item=><img src={item.photo}/>)} */}
                    <Carousel itemsToShow={3}>
                       <Item><img src={bmaks} width="330" height="250" alt="Безумный макс"/></Item> 
                       <Item><img src={cremd} width="330" height="250" alt="Безумный макс"/></Item>
                       <Item><img src={starw} width="330" height="250" alt="Безумный макс"/></Item> 
                       <Item><img src={bmaks} width="330" height="250" alt="Безумный макс"/></Item> 
                       <Item><img src={cremd} width="330" height="250" alt="Безумный макс"/></Item>
                       <Item><img src={starw} width="330" height="250" alt="Безумный макс"/></Item>  
                       <Item><img src={bmaks} width="330" height="250" alt="Безумный макс"/></Item> 
                       <Item><img src={cremd} width="330" height="250" alt="Безумный макс"/></Item>
                       <Item><img src={starw} width="330" height="250" alt="Безумный макс"/></Item> 
                    </Carousel>
           
        </div>
    );
    }
export default Slider;