'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import IconLogo from '../icons/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faAt } from '@fortawesome/free-solid-svg-icons';
import { handleURLButtonClick } from '@/lib/utils';
import Toast from '@/components/ui/toast';
import { databases } from '@/lib/appwrite';
import { ID } from 'appwrite';

const StyledContactSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  font-style: normal;
  line-height: normal;
  padding: 0px 0;
  position: relative;
  gap: 100px;

  .vertical-separator {
    position: relative;
    height: 150px;
    width: 1px;
    border: 1px solid var(--light-black);
    margin: 0;
  }

  hr {
    display: none;
  }

  .left-panel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10%;
    position: relative;
    width: 50%;

    .contact-logo {
      position: relative;
      width: 20%;
    }

    p {
      position: relative;
      width: 30%;
      font-weight: 700;
      font-size: var(--fs-5xl);
      word-wrap: normal;
    }
  }

  .right-panel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 50%;
    gap: 15px;

    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 15px;

      p {
        font-weight: 500;
        font-size: var(--fs-xxxl);
      }

      .email-div {
        display: flex;
        flex-direction: row;
        gap: 0;
        align-items: center;

        input[type='email'] {
          border: none;
          border-bottom: 2px solid var(--light-black);
          font-weight: 500;
          font-size: var(--fs-lg);
          padding: 10px 7px;
          background: transparent;
          outline: none;
          color: var(--white);
          width: 280px;
          transition: ease 0.25s;
        }

        .icon {
          rotate: 45deg;
          padding: 10px 7px;
          font-size: var(--fs-xxl);
          cursor: pointer;
        }
      }
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

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: row;
    min-height: 40vh;
    gap: 5vh;

    .right-panel {
      align-items: center;
      gap: 15px;

      form {
        p {
          font-size: var(--fs-xxl);
        }

        .email-div {
          gap: 5px;

          input[type='email'] {
            font-size: var(--fs-lg);
          }

          .icon {
            font-size: var(--fs-xl);
          }
        }
      }

      .socials {
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    padding: 0px 0;
    gap: 5vh;

    .vertical-separator {
      display: none;
    }

    .left-panel {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10%;
      position: relative;
      width: 100%;

      .contact-logo {
        width: 3.2rem;
      }

      p {
        font-size: var(--fs-xxxl);
      }
    }

    .right-panel {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      gap: 15px;

      form {
        gap: 15px;

        p {
          font-size: var(--fs-xl);
        }

        .email-div {
          gap: 0;
          align-items: center;

          input[type='email'] {
            font-size: var(--fs-md);
            width: 280px;
          }

          .icon {
            font-size: var(--fs-lg);
          }
        }
      }

      .socials {
        width: 100%;
        justify-content: center;
        gap: 30px;
        margin-top: 10px;

        .icon {
          font-size: 30px;
          line-height: 60px;
        }
      }
    }
  }
`;

const StyledVerticalSeparator = styled.div`
  position: absolute;
  top: 0;
  left: -45vw;
  height: 1px;
  width: 150vw;
  border-top: 1px solid var(--light-black);

  @media (max-width: 1080px) {
    left: -20%;
    width: 150vw;
  }

  @media (max-width: 768px) {
    left: -25%;
    width: 150vw;
  }
`;

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const handleClick = (message: string, resetEmail: boolean = true) => {
    setEmail(resetEmail ? '' : email);
    setErrorMessage(message);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleContactForm = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (email === '') {
      handleClick('Please fill email', false);
      return;
    } else if (!emailRegex.test(email)) {
      handleClick('Please correct the Email Address', false);
      return;
    }

    try {
      const response = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
        ID.unique(),
        { email_id: email }
      );

      if (response.$id.length > 0) {
        handleClick(`Thanks for contacting me, ${response.email_id}.`);
      }
    } catch (error: unknown) {
      const appwriteError = error as { code?: number };
      if (appwriteError.code === 409) {
        handleClick('Thank you for contacting me. I already got your email.');
      } else {
        handleClick('Something went wrong.');
      }
    }
  };

  return (
    <form onSubmit={handleContactForm}>
      <Toast message={errorMessage} open={open} onClose={handleClose} />
      <p>Stay connected w/ me.</p>
      <div className="email-div">
        <input
          type="email"
          name="emailId"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <FontAwesomeIcon className="icon" icon={faArrowUp} onClick={handleContactForm} />
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <StyledVerticalSeparator />
      <div className="left-panel">
        <div className="contact-logo">
          <IconLogo />
        </div>
        <p>Yash Patel</p>
      </div>
      <div className="vertical-separator" />
      <hr />
      <div className="right-panel">
        <div className="contact-form">
          <ContactForm />
        </div>
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
    </StyledContactSection>
  );
};

export default Contact;
