# reserved-Android-webdriverIO-Appium

# test structure

- in pageobjects folder there are selectors and methods for test files
- in spec folder there are test files
- every spec file have at least one "describes" in it, each "describe" can be treated as separate user story
  these "describes" can have multiple "its", "it" is not always independent from rest of "its" in "describe",
  read about "mocha" framework to get familiar with this nomenclature, I know every test should be separate but
  sometimes it depends on strategy, it makes tests much faster if I treat "describe" as a full story and not "it",
  it is faster but cost is that if one of "its" will fail, other following "its" will fail as well in scope of specific
  "describe"
- after runner finishes test file, before next test file is run app is reinstalled, so every test file works on new instance
  of the app
- because of app architecture sometimes there can be disruption with receiving content form server and this can cause tests
  fail or poor internet connection in android device can have same effect

# about tests

- test were developed on Samsung Galaxy S8, it will work on other devices with android as well but there is
  possibility that in some situations different phone will behave a little bit different
- tests are written for anonymous user account
- these test are end to end tests
- tests set up was tested on MacBook with intel chip, most probably it should work on MacBook
  with M1, M2 as well, probably windows and linux will need some adjustment in terms of docker installation commands
- tests run in docker so there is no need for appium set up

# app version

- app version 2.0.2
- app was downloaded from googlePlay and converted to .apk file with https://apkcombo.com
- .apk file is included in repository

# requirements

- installed docker: https://docs.docker.com/get-docker/
- device with android system
- android device and local machine connected to the same wifi

# installation on MacBook

run in repository root directory in terminal:

1. sudo docker build -t appium-image -f .dockerfile .

2. docker run --name appium-container appium-image

run in second terminal in repository root directory:

1. docker exec -it appium-container adb connect <your phone Ip address>:5555

- for example: docker exec -it appium-container adb connect 192.168.1.97:5555
  after this command agree on android device for connection

- to read how to check phone IP address go to section "#Phone Ip address" in README
  run tests with command:

2. docker exec -it appium-container npm run wdio:docker

- when you run tests first time it can take few minutes for app being installed so please be patient

# technologies used

- typescript
- webdriverIO
- mocha
- docker
- appium

# phone Ip address

- Go to your device settings and in search bar type: IP address
- Or find it in settings manually

# troubleshooting

- failed to connect to 'IP:555': Connection refused
  connect phone with cable
  run (on local machine) in terminal command: adb usb
  allow connection on your phone
  run in terminal: adb tcpip 5555
  run in terminal: adb connect <your phone Ip address>:555
  for example: adb connect 192.168.1.97:5555
- ERROR [internal] load metadata for docker
  try following command in terminal: rm ~/.docker/config.json

# challenges with tests

- in the app there are not proper selectors like unique ids or classes so usually to find selectors
  texts were used or xpaths, I tried to make xpath selectors as short as possible but still there us possible
  risk of unstable tests
- appium docker image is not latest one, reason is that node 16.x is required, if tests are run in docker with
  node higher than 16.x there is "segmentation fault" in image during running tests. However lower appium version was
  tested with tests here and it works fine
