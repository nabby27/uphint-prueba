CONTAINER_NAME=uphint

install:
	@docker-compose run --rm $(CONTAINER_NAME) npm install $(deps)

.PHONY: build
build: install
	@docker-compose run --rm $(CONTAINER_NAME) npm run build
	@docker-compose run --rm $(CONTAINER_NAME) chown -R node:node .

prettier:
	@docker-compose run --rm $(CONTAINER_NAME) npm run prettier

test:
	@docker-compose run --rm $(CONTAINER_NAME) npm run test 

test/watch:
	@docker-compose run --rm $(CONTAINER_NAME) npm run test:watch
