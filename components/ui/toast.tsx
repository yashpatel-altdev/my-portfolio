'use client';

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`;

const StyledToast = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e8e8e8;
  font-family: var(--font-sans);
  font-size: 14px;
  max-width: 340px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  animation: ${slideIn} 0.25s ease forwards;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.2s ease;

  button {
    background: none;
    border: none;
    color: #c8c8c8;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    line-height: 1;
    margin-left: auto;
    flex-shrink: 0;

    &:hover {
      color: #ffffff;
    }
  }
`;

interface ToastProps {
  message: string;
  open: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast = ({ message, open, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <StyledToast $visible={open}>
      <span>{message}</span>
      <button onClick={onClose} aria-label="close">
        ×
      </button>
    </StyledToast>
  );
};

export default Toast;
