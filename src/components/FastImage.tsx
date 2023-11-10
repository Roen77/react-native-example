import React from 'react';
import Image, {FastImageProps} from 'react-native-fast-image';

interface imageProps extends FastImageProps {
  resizeMode: 'cover' | 'contain' | 'stretch';
}
function FastImage({resizeMode, ...props}: imageProps) {
  return (
    <Image
      {...props}
      resizeMode={
        resizeMode === 'cover'
          ? Image.resizeMode.cover
          : resizeMode === 'contain'
          ? Image.resizeMode.contain
          : Image.resizeMode.stretch
      }
    />
  );
}

export default FastImage;
