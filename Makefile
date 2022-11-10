CONTAINER_NAME=uphint
CONTAINER_E2E_TEST=uphint_e2e_test

install:
	@docker compose run --rm $(CONTAINER_NAME) npm install $(deps)

.PHONY: build
build: install
	@docker compose run --rm $(CONTAINER_NAME) npm run build
	@docker compose run --rm $(CONTAINER_NAME) chown -R node:node .

start:
	@docker compose run --rm $(CONTAINER_NAME) npm run start

prettier:
	@docker compose run --rm $(CONTAINER_NAME) npm run prettier

test/unit:
	@docker compose run --rm $(CONTAINER_NAME) npm run test:unit 

test/unit/watch:
	@docker compose run --rm $(CONTAINER_NAME) npm run test:unit:watch

test/component:
	@docker compose run --rm $(CONTAINER_NAME) npm run test:component 

test/component/watch:
	@docker compose run --rm $(CONTAINER_NAME) npm run test:component:watch

test/e2e:
	@docker compose run --rm $(CONTAINER_E2E_TEST) npm run test:e2e 
