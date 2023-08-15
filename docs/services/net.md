## NET

Stands for: **NET**work (management)

Purpose: Manage networks that can be attached to docker containers

### /net/ping

```
Method: GET
Params: None
Returns: { "msg": "net: pong" } or JSON parsable error
Purpose: Ensure the NET service is available
```

### /net/subnet/list

```
Method: GET
Params: None
Returns: Array of JSON objects or JSON parsable error
Purpose: List all networks launched by the user and those created by cloudlet. These contain the word cloudlet and should only be altered at your own expense.
```

### /net/subnet/create

```
Method: POST
Params: {
	"private": false // Whether the network should be exposed to the internet/you or not
}
Returns: JSON object containing information about the created network or JSON parsable error
Purpose: Create a new network
```

### /net/subnet/delete

```
Method: POST
Params: {
	containerId: ".."
}
Returns: { "msg": "ok" }, { "msg": "Container does not exist" } or JSON parsable error
Purpose: Delete an existing network.
```
