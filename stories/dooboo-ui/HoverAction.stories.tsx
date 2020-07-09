import { IC_FACEBOOK, IC_GOOGLE } from '../Icon';
import { Image, View } from 'react-native';
import React, { ReactElement, useState } from 'react';

import { ContainerDeco } from '../../storybook/decorators';
import HoverAction from '../../main/HoverAction';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';

const Container = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 28px;
  padding-top: 80px;

  flex-direction: column;
`;

function Default(): React.ReactElement {
  return (
    <Container>
      <HoverAction />
    </Container>
  );
}

/**
 * Below are stories for web
 */
export default {
  title: 'Modal',
};

export const toStorybook = (): ReactElement => <Default />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Modal', module)
  .addDecorator(ContainerDeco)
  .add('default', () => (
    <>
      <Default />
    </>
  ));
