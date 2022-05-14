import React from 'react';
import styled from 'styled-components';

export default function Button({ size, color, round, icon }) {
    const Btn = styled.button`
        width: ${size.width};
        height: ${size.height};
        border-radius: ${round ? '50%' : 'none'};
        background-color: ${color};
        border: none;
        position: fixed;
        bottom: 0;
        right: 0;
        &:hover {
            cursor: pointer;
        };
        &:active {
            transform: scale(0.85);
            box-shadow: 3px 2px 25px 1px rgba(0,0,0,0.25);
        }
`;

    return <Btn>{icon}</Btn>;

}