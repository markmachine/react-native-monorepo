kill:
	watchman watch-del-all
	rm -rf $TMPDIR/react-*

clean:
	rm -rf node_modules/
	npm cache clean --force

clean-builds:
	rm -rf ios/build
	rm -rf android/build

init:
	npm install

start:
	npm start -- --reset-cache

run: clean-datastore
	npm run ios

test:
	npm run test-watch

clean-datastore:
	rm -rf ios/build/Index/DataStore

all: kill clean clean-builds

run-all: all init start

start-all: kill clean-builds clean-datastore start

.PHONY: kill clean init all start run test run-all start-all
