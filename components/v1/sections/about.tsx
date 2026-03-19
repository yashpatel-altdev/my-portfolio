'use client';

import { styled } from 'styled-components';
import AboutTaglineIcon from '../icons/aboutTaglineIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { handleURLButtonClick } from '@/lib/utils';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const StyledAboutSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-style: normal;
  line-height: normal;
  padding: 0px 0;
  gap: 100px;
  position: relative;

  hr {
    width: 100%;
    border-width: 0px;
    height: 1px;
    background-color: var(--light-black);
    margin: 0;
  }

  @media (max-width: 1080px) {
    padding: 90px 0 0 0;
  }

  @media (max-width: 768px) {
    padding: 85px 0 0 0;
  }

  @media (max-width: 480px) {
    min-height: 100vh;
    padding: 70px 0 0 0;
    gap: 2rem;
    justify-content: center;
  }
`;

const StyledTagline = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 0px;
    color: var(--white);
    font-family: var(--font-sans);
    font-size: clamp(var(--fs-5xl), var(--fs-xbig), var(--fs-big));
    font-weight: 500;
    word-wrap: normal;
    width: fit-content;
  }

  .second-tagline {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;

    svg {
      position: relative;
      margin-left: 10px;
      top: -6px;
      aspect-ratio: 1;
      height: 65px;
    }
  }

  @media (max-width: 1080px) {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      margin: 0px;
      font-size: clamp(var(--fs-4xl), var(--fs-5xl), var(--fs-xbig));
    }

    .second-tagline {
      svg {
        margin-left: 5px;
        top: -8px;
        height: 1.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      margin: 0px;
      font-size: clamp(var(--fs-xxl), var(--fs-xxxl), var(--fs-4xl));
    }

    .second-tagline {
      svg {
        margin-left: 5px;
        top: -8px;
        height: 1.5rem;
      }
    }
  }
`;

const StyledInfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;

  .profile-image-div {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 45%;
    border-radius: 150px;
    background-color: var(--black);
    justify-content: space-around;
    align-items: center;
    gap: 5%;

    .profile-image {
      position: relative;
      width: 150px;
      height: 100%;
      clip-path: border-box;
      overflow: hidden;
      display: flex;
      justify-content: center;

      img {
        position: absolute;
        width: 125%;
        height: 130%;
        top: 25px;
      }
    }

    .black-matter-image {
      position: relative;
      width: 85px;
      aspect-ratio: 1;
    }
  }

  .profile-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 50%;
    gap: 15px;

    p {
      display: flex;
      word-wrap: break-word;
      position: relative;
      width: 100%;
      font-size: var(--fs-xl);
    }

    .socials {
      display: flex;
      flex-direction: row;
      position: relative;
      width: 70%;
      justify-content: flex-start;
      gap: 30px;
      cursor: pointer;
      margin-top: 5px;

      .icon {
        font-size: 30px;
        line-height: 60px;
        transition: 0.3s;

        &:hover {
          transform: translate(0, -10%);
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column-reverse;
    align-items: center;
    gap: 45px;

    .profile-image-div {
      width: 80%;
      border-radius: 100px;

      .profile-image {
        position: relative;
        width: 80px;
        height: 95px;

        img {
          position: absolute;
          width: 125%;
          height: 130%;
          top: 10px;
        }
      }
    }

    .profile-description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 20px;

      p {
        display: flex;
        word-wrap: normal;
        width: 100%;
        font-size: clamp(var(--fs-lg), var(--fs-xl), var(--fs-xxl));
      }

      .socials {
        width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    position: relative;
    width: 100%;
    height: fit-content;
    flex-direction: column-reverse;
    gap: 25px;

    .profile-image-div {
      width: 100%;
      border-radius: 100px;

      .profile-image {
        position: relative;
        width: 70px;
        height: 85px;
        clip-path: border-box;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          position: absolute;
          width: 125%;
          height: 130%;
          top: 10px;
        }
      }
    }

    .profile-description {
      gap: 10px;
    }
  }
`;

const About = (): React.ReactElement => {
  return (
    <StyledAboutSection id="about">
      <StyledTagline>
        <span className="first-tagline">
          <p>Innovative by Design,</p>
        </span>
        <span className="second-tagline">
          <p>Developer by Nature</p>
          <AboutTaglineIcon />
        </span>
      </StyledTagline>

      <hr />
      <StyledInfoSection>
        <div className="profile-image-div">
          <div className="profile-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="profile-image"
              src="/assets/images/profile-photo.png"
              alt="displays face of yash"
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="black-matter-image"
            src="/assets/images/black-matter-gif.gif"
            alt="gif of black matter"
          />
        </div>
        <div className="profile-description">
          <p>
            I am a software developer with a background in Java, MySQL, and JavaScript and I am
            passionate about learning new technologies. I might have some desirable technical skills,
            but I am improving daily to become a more versatile developer while improving people
            skills.{' '}
          </p>
          <div className="socials">
            <div
              className="social-pin"
              onClick={handleURLButtonClick('https://www.linkedin.com/in/yash-patel-dev/', true)}
            >
              <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            </div>
            <div
              className="social-pin"
              onClick={handleURLButtonClick('https://github.com/yashpatel024', true)}
            >
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </div>
            <div
              className="social-pin"
              onClick={handleURLButtonClick('mailto:yashpatel.dev.ca@outlook.com', true)}
            >
              <FontAwesomeIcon className="icon" icon={faAt} />
            </div>
          </div>
        </div>
      </StyledInfoSection>
    </StyledAboutSection>
  );
};

export default About;
