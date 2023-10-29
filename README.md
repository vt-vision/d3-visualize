## Deploy 

```
docker build \
        -t kg # name of the builded image
        .
```

Then

```
docker run \
    --rm            # delete the container if stop
    -p 3000:3000    # port forwarding local_port:docker_port
    kg
```

1. To restart the container automatically, use `docker run --restart always` instead of `docker run --rm`
2. add `-d` to docker run for running in the background