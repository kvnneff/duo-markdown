NODE ?= node

BIN := ./node_modules/.bin
MOCHA ?= $(NODE) $(BIN)/_mocha

test: node_modules
	@$(MOCHA)

node_modules: package.json
	@npm install

.PHONY: test
