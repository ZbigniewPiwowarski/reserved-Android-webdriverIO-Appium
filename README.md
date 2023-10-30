# reserved-Android-webdriverIO-Appium


# test structure
- in pageobjects folder there are selectors and methods for test files
- in spec folder there are test files
- every spec file have at least one "describes" in it, each "describe" can be treated as separate user story
these "describes" can have multiple "its", "it" is not always independent from rest of "its" in "describe",
read about "mocha" framework to get familiar with this nomenclature 

# challenges with tests
- in the app there are not proper selectors like unique ids or classes so usually to find selectors
texts were used or xpaths, I tried to make xpath selectors as short as possible but still it is possible 
risk of unstable tests



