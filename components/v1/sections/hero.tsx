'use client';

import { styled } from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  font-style: normal;
  line-height: normal;

  h1 {
    font-family: var(--font-sans);
    font-size: clamp(var(--fs-5xl), var(--fs-xbig), var(--fs-big));
    font-weight: 700;
    color: var(--white);
  }

  .subtext-1 {
    margin: 10px 0 0 0;
    color: var(--white);
    font-family: var(--font-mono);
    font-size: clamp(var(--fs-xxl), var(--fs-xxxl), var(--fs-4xl));
    font-weight: 400;
    text-align: center;
  }

  .tagline {
    margin: 24px 0 0 0;
    color: var(--white);
    font-family: var(--font-mono);
    font-size: clamp(var(--fs-md), var(--fs-lg), var(--fs-xl));
    font-weight: 300;
    align-items: center;
    word-wrap: break-word;
  }

  .profile-head-div {
    position: relative;
    width: 350px;
    height: 350px;
    clip-path: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;

    img {
      position: relative;
      max-width: 140%;
      height: 120%;
      aspect-ratio: 1;
    }
  }

  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 90px);

    .tagline {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 20px 0 0 0;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 70px);

    h1 {
      font-size: clamp(var(--fs-xxxl), var(--fs-4xl), var(--fs-5xl));
    }

    .subtext-1 {
      margin: 10px 0 0 0;
      font-size: var(--fs-sm);
    }

    .tagline {
      display: flex;
      flex-direction: column;
      word-wrap: break-word;
      gap: 5px;
      margin: 20px 0 0 0;
      font-size: var(--fs-xs);
    }

    .profile-head-div {
      width: 14rem;
      height: 14rem;
    }
  }
`;

const BackgroundBlur = styled.div`
  position: absolute;
  align-self: center;
  margin-bottom: 20%;
  background: var(--light-blue);
  width: 25rem;
  height: 25rem;
  border-radius: 25rem;
  filter: blur(255.4499969482422px);
  -webkit-filter: blur(255.4499969482422px);
  z-index: -10;
`;

const words = 'Software Developer | Full-stack Enthusiast';

const Hero = (): React.ReactElement => {
  return (
    <>
      <StyledHeroSection id="hero">
        <div className="profile-head-div">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/profileHead.png" alt="Profile Head" />
        </div>
        <h1>Yash Patel</h1>
        <p className="subtext-1">{words}</p>
        <p className="tagline">
          <span>Crafting Innovative Solutions in </span>
          <span>Java & JavaScript </span>
        </p>
        <BackgroundBlur />
      </StyledHeroSection>
    </>
  );
};

export default Hero;
