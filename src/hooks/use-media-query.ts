import { useMediaQuery as Query } from "@uidotdev/usehooks";

export const useMediaQuery = () => {
  const isMobile = Query("only screen and (max-width: 768px)");
  const isTablet = Query("only screen and (max-width: 1024px)");
  const isDesktop = Query("only screen and (min-width: 1440px)");

  return { isMobile, isTablet, isDesktop };
};
