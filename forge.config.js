module.exports = {
  packagerConfig: {
    asar: true,
    osxSign: {
      identity: 'Developer ID Application: Better Brand Management LLC (ZA3KN2X4MN)',
      'hardened-runtime': true,
      entitlements: 'entitlements.plist',
      'entitlements-inherit': 'entitlements.plist',
      '--notarize': true,
      }, 
      "afterSign": "build/notarize.js",
      "icon": 'mtn.icns'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
