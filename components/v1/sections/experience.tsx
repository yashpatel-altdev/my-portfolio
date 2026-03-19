'use client';

import React from 'react';
import styled from 'styled-components';
import { experiencesData } from '@/constants/data';

const StyledExperienceSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  font-style: normal;
  line-height: normal;
  position: relative;
  padding: 0px 0;
  padding-top: 15%;
  gap: 50px;

  h2 {
    font-family: var(--font-sans);
    font-size: clamp(var(--fs-xxl), 3vw, var(--fs-xbig));
    font-weight: 500;
    color: var(--white);
    display: flex;
    align-self: flex-start;
  }

  @media (max-width: 1080px) {
    padding: 150px 0 0 0;
    gap: 3rem;
    justify-content: center;

    h2 {
      font-size: clamp(var(--fs-xxxl), var(--fs-4xl), var(--fs-5xl));
      margin: 0;
      align-self: center;
    }
  }

  @media (max-width: 480px) {
    padding: 100px 0 0 0;
    gap: 2rem;
    justify-content: center;

    h2 {
      font-size: clamp(var(--fs-xxl), var(--fs-xxxl), var(--fs-4xl));
      margin: 0;
    }
  }
`;

const StyledExperience = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 2vw;

  .card {
    position: relative;
    display: flex;
    width: 30%;
    height: clamp(500px, 60vh, 600px);
    border-radius: 30px;
    flex-direction: column;
    padding: 30px;
    color: var(--white);
    justify-content: space-between;
    border: 1px solid var(--light-black);

    .card-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .card-logo {
        position: relative;
        width: 60px;
        height: auto;
        z-index: 3;
      }

      .card-logo-shadow {
        position: absolute;
        z-index: -1;
        width: 40px;
        height: auto;
        -webkit-filter: blur(20px);
        filter: blur(20px);
        left: 40px;
        top: 40px;
      }

      p {
        font-family: var(--font-sans);
        font-size: var(--fs-md);
        font-weight: 500;
        color: var(--light-gray);
      }
    }

    .card-desc {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      overflow: hidden;

      .card-main-title {
        font-family: var(--font-sans);
        font-size: clamp(var(--fs-xl), var(--fs-xxl), var(--fs-xxxl));
        font-weight: 700;
        margin: 0;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      .card-sub-title {
        font-family: var(--font-sans);
        font-size: var(--fs-xl);
        font-weight: 500;
        line-height: normal;
      }

      .card-body-text {
        font-family: var(--font-sans);
        font-size: var(--fs-md);
        font-weight: 400;
        line-height: normal;
        margin-bottom: 8px;
        height: 0;
        visibility: hidden;
        transition: height 2s 0.5s;
        color: var(--light-white);
      }

      .card-tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        width: 85%;
        gap: 5px;
        color: var(--gray);

        p {
          font-family: var(--font-sans);
          font-size: var(--fs-sm);
          font-weight: 500;
          border: 1px solid var(--gray);
          border-radius: 20px;
          padding: 1px 15px;
        }
      }
    }
  }

  .card:hover {
    .card-body-text {
      visibility: visible;
      height: auto;
    }
  }

  @media (max-width: 1080px) {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    .card {
      position: relative;
      display: flex;
      width: 45%;
      height: clamp(500px, 50vh, 550px);
      padding: 25px;

      .card-header {
        .card-logo {
          width: 50px;
        }

        .card-logo-shadow {
          width: 30px;
          left: 30px;
          top: 30px;
        }

        p {
          font-size: var(--fs-sm);
        }
      }

      .card-desc {
        gap: 0.4rem;

        .card-main-title {
          font-size: var(--fs-lg);
        }

        .card-sub-title {
          font-size: var(--fs-md);
        }

        .card-body-text {
          font-size: var(--fs-sm);
          visibility: visible;
          height: auto;
        }

        .card-tags {
          width: 100%;
          gap: 7px;

          p {
            font-size: var(--fs-xs);
            border-radius: 10px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 4vh;

    .card {
      position: relative;
      display: flex;
      width: 100%;
      height: clamp(500px, 40vh, 600px);
      padding: 25px;

      .card-header {
        img {
          width: 50px;
        }

        p {
          font-size: var(--fs-sm);
        }
      }

      .card-desc {
        gap: 0.4rem;

        .card-main-title {
          font-size: var(--fs-lg);
        }

        .card-sub-title {
          font-size: var(--fs-md);
        }

        .card-body-text {
          font-size: var(--fs-sm);
          visibility: visible;
          height: auto;
        }

        .card-tags {
          width: 100%;
          gap: 7px;

          p {
            font-size: var(--fs-xs);
            border-radius: 10px;
          }
        }
      }
    }
  }
`;

const Experience = () => {
  return (
    <StyledExperienceSection id="experience">
      <h2>Where I&apos;ve Worked</h2>
      <StyledExperience>
        {experiencesData.map((experience) => (
          <div className="card" id={experience.id} key={experience.id}>
            <div className="card-header">
              <a href={experience.companyUrl} target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="card-logo" src={experience.icon} alt="Company Logo" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="card-logo-shadow" src={experience.icon} alt="Company Logo" />
              </a>
              <p>{experience.date}</p>
            </div>
            <div className="card-desc">
              <h3 className="card-main-title">{experience.title}</h3>
              <a href={experience.companyUrl} target="_blank" rel="noreferrer">
                <p className="card-sub-title">{experience.company}</p>
              </a>
              <p className="card-body-text">{experience.description}</p>
              <div className="card-tags">
                {experience.skills &&
                  experience.skills.map((skill, i) => <p key={i}>{skill}</p>)}
              </div>
            </div>
          </div>
        ))}
      </StyledExperience>
    </StyledExperienceSection>
  );
};

export default Experience;
