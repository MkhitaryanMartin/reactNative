import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {Sizes} from 'assets/RootStyle';
import {useSelector} from 'react-redux';
import {normalize} from 'assets/RootStyles/normalize';

const GroupIcon = ({width, height, color}) => {
  const {theme} = useSelector(({theme}) => theme);
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18 7.16a.605.605 0 00-.19 0 2.573 2.573 0 01-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 012.58 2.58A2.589 2.589 0 0118 7.16zM16.97 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.97 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 002.48-2.58C8.64 3.15 7.49 2 6.06 2a2.58 2.58 0 00-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58zM7 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71M12 14.63a.605.605 0 00-.19 0 2.573 2.573 0 01-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 012.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58zM9.09 17.78c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0z"
        stroke={color || theme?.PRIMARY_TEXT_COLOR}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {GroupIcon};
