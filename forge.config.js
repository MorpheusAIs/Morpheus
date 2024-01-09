module.exports = {
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
      config: {
        background: "./build/SVG/dmgbg.svg",
        format: "ULFO",
        icon: "./public/MOR_logo_circle.icns",
        window: {
          width: 600,
          height: 400
      }
    },
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      //      platforms: ['darwin'],
      config: {
        options: {
          maintainer: 'Morpheus',
          homepage: 'https://www.mor.org',
          icon: './public/morph_square.png',
          categories: ['Utility'],
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
/*     {
      name: "@electron-forge/maker-snap",
      config: {},
    }, */
  ],
  packageManager: 'npm',
  packagerConfig: {
    icon: "./public/MOR_logo_circle.icns",
    executableName: 'morpheus',
    osxSign: {
      identity: process.env.APPLE_IDENTITY,
      entitlements: "public/entitlements.plist",
      entitlementsInherit: "public/entitlements.plist",
    },
/*     osxNotarize: {
      tool: "notarytool",
//      appleId: process.env.APPLE_ID,
//      appleIdPassword: process.env.APPLE_PASSWORD,
//      teamId: process.env.APPLE_TEAM_ID,
        keychainProfile: "betterbrand"
    }, */
  },
};