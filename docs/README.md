# Hero API
Does stuff with heroes.

# Routes
## Authorization
### POST / SIGN UP
Route: https://hero-api.herokuapp.com/api/users

creates a new user

```
{
	"user":{
		"email": "example@example.com",
		"password": "example"
	}
}
```

### POST / LOGIN
Route: https://hero-api.herokuapp.com/api/users/login

logins a user
```
{
	"user":{
		"email": "example@example.com",
		"password": "example"
	}
}
```

### GET / CURRENT
Route: https://hero-api.herokuapp.com/api/users/current

returns the current user & token / must be logged in

```
{
    "user": {
        "_id": "5c81f05f3ec66800173c52d0",
        "email": "example@example.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJpZCI6IjVjODFmMDVmM2VjNjY4MDAxNzNjNTJkMCIsImV4cCI6MTU1NzIwMzc4MSwiaWF0IjoxNTUyMDE5NzgxfQ.IltTn1yB5ejbNbmIpT_m-hLGygvrWMHoMUiBizhHyCM"
    }
}
```

### Heroes

### POST
Route: https://hero-api.herokuapp.com/api/heroes

creates a hero
```
{
	"hero":{
		"name": "example",
		"ability": "example",
        "role": "example"
	}
}
```
### DELETE
Route: https://hero-api.herokuapp.com/api/heroes/:id

deletes a hero

## PUT

Route: https://hero-api.herokuapp.com/api/heroes/:id

updates a hero

## GET

Route: https://hero-api.herokuapp.com/api/heroes/:id

gets a specific hero