## CT-LAUNCH

Stands for: **C**on**T**ainer **Launch**

Purpose: Launch Docker containers with pre-configured images. Cloudlet offers such images for things like ssh, but it's entirely possible to boot any image. If docker can pull and run it, cloudlet can.

### /ct-launch/list

```
Method: GET
Params: None
Returns: Array of JSON objects or JSON parsable error
Purpose: List all containers launched by the user.
```

### ct-launch/create

```
Method: POST
Params: {
	"name": "name-of-image", // Name of container. Must follow naming convention for docker container names
    "image": "cloudlet_alpine_ssh", // Image to load onto container. Can be cloudlet based or something else entirely
    "forwardPort": "2222", // Port to forward traffic to host machine
    "protocol": "tcp",
    "port": "22",
    "networkId": "97994ed12cc5ff95c2830c227ef88f5b2cd2ed36dc4c3ea0407ca690d63ac8e9" // Network ID to attach a container to, created by the NET service.

}
Returns: JSON parsable object containing information about the container
Purpose: Create and start containers. Launched containers should not have the name "cloudlet"
```

### ct-launch/delete

```
Method: POST
Params: {
  containerId: "..";
}
Returns: { "msg": "ok" } or JSON parsable error
Purpose: Delete containers
```

### ct-launch/start

```
Method: POST
Params: {
  containerId: "..";
}
Returns: { "msg": "ok" }, { "msg": "Container does not exist" } or JSON parsable error
Purpose: Start containers
```

### ct-launch/stop

```
Method: POST
Params: {
  containerId: "..";
}
Returns: { "msg": "ok" }, { "msg": "Container does not exist" } or JSON parsable error
Purpose: Stop containers
```
