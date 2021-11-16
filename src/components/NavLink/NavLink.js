import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const NavLink = ({href, children}) => {
    return (
        <Wrapper href={href}>
            <Text>{children}</Text>
            <BoldText>{children}</BoldText>
        </Wrapper>
    );
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
  position: relative;
  overflow: hidden;
`;

const TextBase = styled.span`
    display: block;
`;

const Text = styled(TextBase)`
    transition: transform 500ms;
    transform: translateY(0%);

    ${Wrapper}:hover & {
        transform: translateY(-100%);
    }
`;

const BoldText = styled(TextBase)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-weight: bold;
    transition: transform 500ms;
    transform: translateY(100%);

    ${Wrapper}:hover & {
        transform: translateY(0%);
    }
`;

export default NavLink;