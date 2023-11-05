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
- because of app architecture sometimes there can be disruption with receiving content form server and this can cause tests
  fail or poor internet connection in device can have same effect

# challenges with tests

- in the app there are not proper selectors like unique ids or classes so usually to find selectors
  texts were used or xpaths, I tried to make xpath selectors as short as possible but still there us possible
  risk of unstable tests
