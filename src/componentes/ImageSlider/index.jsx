import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";

const SliderContainer = styled.div`
  width: 50%;
  height: 70%;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

const Slide = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  transition: opacity 0.5s ease-in-out;
`;

const Buttons = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 50%;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(255,255,255,0.8);
  }
`;

const ImageSlider = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <SliderContainer>
      <Slide src={images[index]} alt={`Imagem ${index + 1}`} />
      <Buttons>
        <Button onClick={previous}>‹</Button>
        <Button onClick={next}>›</Button>
      </Buttons>
    </SliderContainer>
  );
};

export default ImageSlider;
