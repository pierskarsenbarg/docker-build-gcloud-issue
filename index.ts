import * as docker from "@pulumi/docker-build";

const image = new docker.Image("image", {
    dockerfile: {
        location: "./Dockerfile"
    },
    context: {
        location: "."
    },
    push: false,
    exports: [{
        cacheonly: {}
    }]
})