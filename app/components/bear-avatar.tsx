import { memo } from 'react';

interface BearAvatarProps {
  currentImage: string;
  size?: number;
}

const BearAvatar = memo(function BearAvatar({ currentImage, size = 130 }: BearAvatarProps) {
  console.log(currentImage)
  return (
    <img 
      src={currentImage || '/assets/img/hide_bear_0.png'} 
      className="rounded-full transition-all duration-200 ease-in-out"
      width={size}
      height={size}
      style={{ 
        objectFit: 'contain',
        transform: 'translate3d(0,0,0)' // Force GPU acceleration
      }}
      loading='eager'
      tabIndex={-1}
      alt="Animated bear avatar"
    />
  );
});

export default BearAvatar;
