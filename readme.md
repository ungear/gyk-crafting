### To run in Docker
```
docker run -dp 4200:1234 `
>> -w /app --mount type=bind,src="$(pwd)",target=/app `
>> node:18-alpine `
>> sh -c "yarn install && yarn run start"

```
`touch <file>` in Docker to trigger file change and rebuild app 