module.exports = {
  rebuildConfig: {},
  makers: [
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
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
    {
      name: "@electron-forge/maker-snap",
      config: {},
    },
  ],   
  //TODO: document env variables
  packagerConfig: {
    icon: "./public/MOR_logo_circle.icns",
    osxSign: {
      identity: process.env.APPLE_IDENTITY,
    },

/*     osxNotarize: {
      tool: "notarytool",
//      appleId: process.env.APPLE_ID,
//      appleIdPassword: process.env.APPLE_PASSWORD,
//      teamId: process.env.APPLE_TEAM_ID,
        keychainProfile: "process.env.KEYCHAIN_PROFILE"
    }, */
  },
};
