/**

docker buildx build --platform linux/amd64,linux/arm64 -t enrichosamb/node-js:latest --push .
docker manifest inspect enrichosamb/node-js:latest
test workflow ubuntu docker

*/