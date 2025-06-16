import 'dotenv/config';

export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: "com.adiazcriv16.raterepositoryapp"
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "1c5f413d-e761-4ba5-b52b-05c90f2daf82"
    },
    env: {
      env: process.env.ENV,
      apolloUri: process.env.APOLLO_URI
    }
  }
}

