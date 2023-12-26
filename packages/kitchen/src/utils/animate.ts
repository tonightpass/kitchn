import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -70%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeOutUp = keyframes`
  0% {
      opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -70%, 0);
  }
`;

export const float = keyframes`
  0% {
      transform: translatey(0px);
  }
  50% {
      transform: translatey(-10px);
  }
  100% {
      transform: translatey(0px);
  }
`;

export const loading = keyframes`
  0% {
    background-position: 0% 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0% 0;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const skBouncedelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const skeleton = keyframes`
  0% {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
`;

export const slideInUp = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
`;

export const slideOutDown = keyframes`
  0% {
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;
