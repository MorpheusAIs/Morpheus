## Installing Morpheus on WSL

- First, install WSL2, you can do that by running `wsl  --install` on an admin command prompt. Then open WSL2 with `wsl` and follow the setup process.
    
- Then run `curl https://ollama.ai/install.sh | sh` to install ollama.

- Then install python by doing `sudo apt-get update` and `sudo apt-get install python3`.

- Then run `pip3 install gdown`.

- Now download the morpheus dpkg by running `gdown https://drive.google.com/uc?id=1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB`.

- Verify the integrity of the Morpheus download by `sha1sum morpheus_0.0.5_amd64.deb`. make sure it matches the hash `b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5`, otherwise abort the installation process.

- Then run `sudo dpkg -i morpheus_0.0.5_amd64.deb`, if the installation fails at first, install the dependencies, and try again.

- Now once you have morpheus installed without any dependency errors, open 2 WSL2 windows by opening 2 commandline windows and typing wsl on both of them, then on one of them run `ollama serve` and on the other run `morpheus`.

