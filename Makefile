clean:
	rm -rf node_modules yarn.lock
	rm -rf packages/widget/node_modules
	rm -rf packages/mobiledemo/node_modules

.PHONY: clean
