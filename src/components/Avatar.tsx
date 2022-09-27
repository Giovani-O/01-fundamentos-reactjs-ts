import { ImgHTMLAttributes } from 'react';
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

/*
  It's possible to unravel the props object by using an object and its properties;
  This allows me to set default values to the properties
*/
export function Avatar({ hasBorder = true, ...props }:AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
