import { useWindowDimensions } from "react-native";

export function useResponsive() {
  const { width, height } = useWindowDimensions();

  const isSmallPhone = width < 360;
  const isMediumPhone = width >= 360 && width < 430;
  const isLargePhone = width >= 430;

  const contentWidth = Math.min(width - (isSmallPhone ? 20 : 24), 520);
  const horizontalPadding = isSmallPhone ? 10 : isLargePhone ? 18 : 12;
  const sectionPadding = isSmallPhone ? 16 : 20;

  return {
    width,
    height,
    isSmallPhone,
    isMediumPhone,
    isLargePhone,
    contentWidth,
    horizontalPadding,
    sectionPadding,
    heroTitleSize: isSmallPhone ? 22 : isLargePhone ? 32 : 28,
    heroTitleLineHeight: isSmallPhone ? 29 : isLargePhone ? 40 : 36,
    pageTitleSize: isSmallPhone ? 20 : isLargePhone ? 28 : 25,
    pageTitleLineHeight: isSmallPhone ? 28 : isLargePhone ? 38 : 36,
    cardTitleSize: isSmallPhone ? 16 : 17,
    stepTitleSize: isSmallPhone ? 17 : 21,
    letterSpacingWide: isSmallPhone ? 2 : 3,
  };
}
