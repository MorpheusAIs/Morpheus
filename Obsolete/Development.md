## Development

Run the following commands in the root directory.

```bash
npm install
npm run start
```

## Packaging and Distribution

### MacOS

1. Download the latest Ollama release for MacOS from [here](https://github.com/jmorganca/ollama/releases).
2. Unzip the downloaded file.
3. Copy the `ollama` executable to `chatd/src/service/ollama/runners/ollama-darwin`.
4. The Electron app should be signed to be able to run on MacOS, so you need a developer certificate. To sign the app, set the following environment variables:

```bash
APPLE_ID=your_apple_id@example.com
APPLE_IDENTITY="Developer ID Application: Your Name (ABCDEF1234)"
APPLE_ID_PASSWORD=your_apple_id_app_specific_password
APPLE_TEAM_ID=ABCDEF1234
```

You can find your Apple ID, Apple Team ID, and Apple ID Application in your Apple Developer account. You can create an app-specific password [here](https://appleid.apple.com/account/manage).

5. Run `npm run package` to package the app.

### Windows

1. Build Ollama from source for Windows, this will support CPU only. See [here](https://github.com/jmorganca/ollama).
2. Copy the `ollama.exe` executable to `chatd/src/service/ollama/runners/ollama.exe`.
3. Run `npm run package` to package the app.

Note: The Windows app is not signed, so you will get a warning when you run it.

### Linux

1. Build Ollama from source for Linux x64 to support CPU only, this allows for a smaller executable package. See [here](https://github.com/jmorganca/ollama).
2. Copy the `ollama` executable to `chatd/src/service/ollama/runners/ollama-linux`.
3. Run `npm run package` to package the app.
