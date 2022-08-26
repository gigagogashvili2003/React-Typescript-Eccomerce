import styled from "styled-components";

export const MainCarouselWrapper = styled.div`
  background-color: white;
`;

export const MainCraouselContainer = styled.div`
  padding: 40px;
  min-height: 40vh;
  background-color: #3b4a6b;

  border-bottom-left-radius: 200px 300px;

  .slick-dots li button:before {
    color: white;
  }

  img {
    margin: auto;
  }

  .slick-slide > div {
    display: grid;
    place-items: center;

    margin: auto;

    padding: 0px;
  }
`;
