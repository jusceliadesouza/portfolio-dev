'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  font-weight: 600;
  color: ${({ theme }) => theme.text_focus};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  width: fit-content;

  // Linha decorativa abaixo do título
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60%;
    height: 4px;
    background: ${({ theme }) => theme.interactive};
    border-radius: 2px;
  }
`;