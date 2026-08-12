/**
 * Central Configuration for WPS Office Landing Page
 * Contains links, download targets, and branding metadata.
 */

export const APP_CONFIG = {
  appName: "WPS Office",
  tagline: "Work Smarter. Create Faster. Anywhere.",
  
  // Single configuration variable for external download destination URL
  // Can be replaced easily when deploying or updating campaign links
  DOWNLOAD_URL: "https://www.wps.com/download/",
  
  // Platform download URLs
  platforms: {
    windows: "https://www.wps.com/download/windows/",
    mac: "https://www.wps.com/download/mac/",
    ios: "https://www.wps.com/download/ios/",
    android: "https://www.wps.com/download/android/",
    linux: "https://www.wps.com/download/linux/",
    web: "https://www.wps.com/office-web/"
  },
  
  trustBadge: "Built for work, study, and everyday productivity.",
  legalDisclaimer: "WPS Office is a trademark of its respective owner. This promotional website is not affiliated with or endorsed by WPS Office unless explicitly stated."
};
