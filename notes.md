# Middleware Notes

## Jargon

Separation of Concerns

_code is a communication device, a way to reveal our intentions to the next developer_

_optimize for readability_

**Everything is Middleware!**

Well, almost everything :-)

Middleware is a queue. That means _order_ matters. It goes top --> bottom, left --> right

## Types (based on how we got it or who built it)

- built-in: included with express
- third party: must be installed from package manager (npm, yarn, etc)
- custom: we write it ourselves!

## Types (based on how it's used)

- global: runs on every request that comes into the server

