import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

/*
  It's possible to unravel the props object by using an object and its properties;
  This allows me to set default values to the properties
*/
export function Avatar({ hasBorder = true, src, alt }:AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
