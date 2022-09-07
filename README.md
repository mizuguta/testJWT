# JWT test project
To use OAuth2 token generation, create typescript test code for gen key pair, sign token and verify token.

# Installation
run `npm i`

# How to use
## Generate key pair
`npm run genKey {key_file_name}`
then a key file is genarated. e.g.
```
% npm run genKey test.key
...
wrote keys to test.key
```

## Sign your token
1. echo '{username}:{password}' | base64
e.g.
```
% echo "user:password" | base64
dXNlcjpwYXNzd29yZAo=
```
2. sign a token
```
npm run signToken {key_file_name} {base64ed_user_password}
```
e.g.
```
% npm run signToken test.key dXNlcjpwYXNzd29yZAo=
user password
{
    "token_type": "Bearer",
    "access_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjRCRkU1Qzg0LUE2OTAtNDYzNC1BMjlELTE2QTVFNzc4QTEwMyJ9.eyJpc3MiOiJ1cmk6bWl6dWd1dGE6dGVzdCIsInN1YiI6InVzZXIiLCJpYXQiOjE2NjI1MjYwOTYsImV4cCI6MTY2MjU2OTI5Nn0.RzytcDY_1FHCZA9vXYNwA4pqG3lDd3zNisGtbaANwG5xpaTBTsT-rMJZKxVRzLU8Z9WSdTCfJ5M1F6kI0bPUaaomAZ-OF3O4PActgWG0QhCmnjCMPUCOpOVcbYc42EpGHu2hSQg_Fy9nVxk0BsHo0pR6J5Dzml0BiTQVeDyUqoNnbqk6c2WNvnC4Q4d_DfcFLXmstEX8qxOQCFMGCO65zmGlGko2_t07Htt4cjIfowpmcJhvjfSHNwJcz6t8936BsxwCn1pqYDk22l7zK6rHtUAhkXnWyCCBqH1Rq09wVTvEWiIi5Q3IQaBGbwdySYxKdyhxoEhjFIhKSNMqeD9X-6_uNabgPMFhBu78oFQDEVNFa48D5UVvcxSAiulUsPyofB77LUHZZgQILy97dQgC0OKJFDNLSKUVGvBTixYoQj2WBDBR6La0LnhI0lONrD-W3AWyGCGDOsUaYTVjnFHwd_6dDoFwWco4cxeX4YTyZxUxrTIEFZawLII1lsagtLON3OSc0mK_VfPoh7Tq9d6nygQgKw7y7IzZWDG9TOFVZMUb3zx1caL2-n_Ww4k_L3Y1ejrp-cwW3aqmQbiBZKr1gkn4Z9S20HFKROkI58WKMZm5nbfeXpJJYSbO-_kF4boNhwZhIOx7Ou0jUl0-x92UZFcs9ahLJQCCAh5nlceh_JU",
    "expires_in": 43200
}

3. Verify token 
```
npm run verifyToken {key_file_name} {token}
```
e.g.
```
% npm run verifyToken test.key "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjRCRkU1Qzg0LUE2OTAtNDYzNC1BMjlELTE2QTVFNzc4QTEwMyJ9.eyJpc3MiOiJ1cmk6bWl6dWd1dGE6dGVzdCIsInN1YiI6InVzZXIiLCJpYXQiOjE2NjI1MjYwOTYsImV4cCI6MTY2MjU2OTI5Nn0.RzytcDY_1FHCZA9vXYNwA4pqG3lDd3zNisGtbaANwG5xpaTBTsT-rMJZKxVRzLU8Z9WSdTCfJ5M1F6kI0bPUaaomAZ-OF3O4PActgWG0QhCmnjCMPUCOpOVcbYc42EpGHu2hSQg_Fy9nVxk0BsHo0pR6J5Dzml0BiTQVeDyUqoNnbqk6c2WNvnC4Q4d_DfcFLXmstEX8qxOQCFMGCO65zmGlGko2_t07Htt4cjIfowpmcJhvjfSHNwJcz6t8936BsxwCn1pqYDk22l7zK6rHtUAhkXnWyCCBqH1Rq09wVTvEWiIi5Q3IQaBGbwdySYxKdyhxoEhjFIhKSNMqeD9X-6_uNabgPMFhBu78oFQDEVNFa48D5UVvcxSAiulUsPyofB77LUHZZgQILy97dQgC0OKJFDNLSKUVGvBTixYoQj2WBDBR6La0LnhI0lONrD-W3AWyGCGDOsUaYTVjnFHwd_6dDoFwWco4cxeX4YTyZxUxrTIEFZawLII1lsagtLON3OSc0mK_VfPoh7Tq9d6nygQgKw7y7IzZWDG9TOFVZMUb3zx1caL2-n_Ww4k_L3Y1ejrp-cwW3aqmQbiBZKr1gkn4Z9S20HFKROkI58WKMZm5nbfeXpJJYSbO-_kF4boNhwZhIOx7Ou0jUl0-x92UZFcs9ahLJQCCAh5nlceh_JU"

CLAIMS {
  iss: 'uri:mizuguta:test',
  sub: 'user',
  iat: 1662526096,
  exp: 1662569296
}
```
