import Svg, { Circle, Path, Rect } from "react-native-svg";

type IconProps = {
  size?: number;
};

export function StoreIcon({ size = 24 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="4" y="9" width="16" height="10" rx="2" fill="#E8EEF9" />
      <Path d="M6 7.5h12L16.9 4H7.1L6 7.5Z" fill="#F05A72" />
      <Rect x="7" y="11" width="4" height="8" rx="1" fill="#57B6FF" />
      <Rect x="13" y="11" width="5" height="3" rx="1" fill="#FFC95A" />
      <Path d="M5 8h14" stroke="#182335" strokeWidth="1.4" />
    </Svg>
  );
}

export function MenuIcon({ size = 24 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="6" y="4" width="12" height="16" rx="2" fill="#F4E7E7" />
      <Rect x="8" y="7" width="8" height="1.5" rx="0.75" fill="#7B5B58" />
      <Rect x="8" y="10" width="8" height="1.5" rx="0.75" fill="#7B5B58" />
      <Rect x="8" y="13" width="8" height="1.5" rx="0.75" fill="#7B5B58" />
      <Rect x="8" y="16" width="5" height="1.5" rx="0.75" fill="#7B5B58" />
    </Svg>
  );
}

export function PinIcon({ size = 24 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 20c3.5-4.3 5.2-7.2 5.2-9.4A5.2 5.2 0 0 0 6.8 10.6C6.8 12.8 8.5 15.7 12 20Z"
        fill="#F06F8A"
      />
      <Circle cx="12" cy="10.4" r="2.2" fill="#FCEEF2" />
    </Svg>
  );
}

export function LockIcon({ size = 24 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="6" y="10" width="12" height="10" rx="3" fill="#FFC05A" />
      <Path
        d="M9 10V8a3 3 0 1 1 6 0v2"
        stroke="#F8F1E4"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Circle cx="12" cy="14.5" r="1.4" fill="#503B19" />
    </Svg>
  );
}

export function CheckIcon({ size = 18 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Rect width="18" height="18" rx="5" fill="#1ddc88" />
      <Path
        d="M5 9.4 7.6 12 13 6.6"
        stroke="#F2FFF8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SparkIcon({ size = 28 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Rect width="28" height="28" rx="14" fill="#22d3a8" />
      <Path
        d="M14.4 5.6c.3 3.7 2.2 5.8 5.6 6.1-3.4.3-5.3 2.4-5.6 6.1-.3-3.7-2.2-5.8-5.6-6.1 3.4-.3 5.3-2.4 5.6-6.1Z"
        fill="#ffb648"
      />
      <Path
        d="M9 14.3c1.8.1 2.8 1.2 2.9 3-0.1-1.8 1.1-2.9 2.9-3-1.8-.1-3-1.2-2.9-3-.1 1.8-1.1 2.9-2.9 3Z"
        fill="#2563eb"
      />
      <Circle cx="18.8" cy="10" r="1.5" fill="#f43f5e" />
    </Svg>
  );
}

export function PlateIcon({ size = 24 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="7" fill="#F3F1FF" />
      <Circle cx="12" cy="12" r="4" fill="#C7D2FE" />
      <Rect x="5" y="4" width="1.5" height="8" rx="0.75" fill="#F8C45B" />
      <Rect x="17.5" y="4" width="1.5" height="8" rx="0.75" fill="#F8C45B" />
    </Svg>
  );
}
