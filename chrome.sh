sudo apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& curl -sSL https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o /tmp/chrome.deb \
&& sudo apt-get -y install /tmp/chrome.deb

google-chrome &