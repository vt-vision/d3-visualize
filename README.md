## Deploy 

```
docker build \
        -t kg # name of the build image
        .
```

Then

```
docker run \
    --rm    # delete the container if stop
    -p 3000:3000    # port forwarding
    kg
```

1. To change the forwarded port, modify the exposed port in `Dockerfile`
2. To restart the container automatically, use `docker run --restart always` instead of `docker run --rm`