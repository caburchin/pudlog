import React, { ReactElement } from 'react';
import { chakra } from '@chakra-ui/react';

import { COLORS } from '../../styles/constants';
import { RoundedButton } from './RoundedButton';
import { Strong, Title } from './typography';

export function Header(): ReactElement {
  return (
    <chakra.div
      className="Header"
      display="flex"
      justifyContent="space-between"
      bgColor={COLORS.card}
      height="4em"
      color={COLORS.white}
      width="100%"
      paddingX="20px"
    >
      <chakra.div
        className="Header-right"
        alignItems="center"
        display="flex"
      >
        <Title>Pudlog</Title>
      </chakra.div>
      <chakra.div
        className="Header-left"
        display="flex"
        alignItems="center"
        width="280px"
        justifyContent="space-evenly"
      >
        <RoundedButton onClick={() => {}}>
          <Strong>Menu1</Strong>
        </RoundedButton>
        <RoundedButton onClick={() => {}}>
          <Strong>Menu2</Strong>
        </RoundedButton>
      </chakra.div>
    </chakra.div>
  );
}
