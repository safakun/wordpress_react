### WORPDRESS REST API + REACT

https://www.youtube.com/watch?v=fFNXWinbgro 


To use backend wordpress docker:
```bash
docker compose up -d
docker compose down --volumes 
```
Or use xampp:
```bash 
sudo /opt/lampp/lampp start
sudo /opt/lampp/lampp stop
``` 

in wordpress admin go to 
settings -> permalinks 

change from plain to post name 
GET request
http://localhost/newsite/wp-json 

GET request 
http://localhost/newsite/wp-json/wp/v2/posts

GET USER REQUEST
http://localhost/newsite/wp-json/wp/v2/users/1 

POST ADD 
POST
in headers - Content-Type -> application/json
http://localhost/newsite/wp-json/wp/v2/posts 
in body go to raw and add json

```json
{
    "title": "Post one",
    "content": "This is post one",
    "status": "publish"
}
```

### NEED TO INSTALL JSON WEV TOKEN PLUGIN TO WORDPRESS 
Add plugin -> jwt 
Plugin is called JWT Authentication for WP REST APU 

Download plugin from link: 
https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/ 

Then install it to wp-content/plugins 
create a folder jwt-authentication-for-wp-rest-api  inside wp-content/plugins 
and paste the data from zip archive

add following data to .htaccess : 

RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1] 
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1

and put it before </IfModule> 


Go to the wp-config.php 
and add secret key:
```php 
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);
```


then go to URL 
POST 
http://localhost/newsite/wp-json/jwt-auth/v1/token 

in headers add Content-Type: application/json 

and in body -> raw 
```json
{
    "username": "deemon",
    "password": "&JXBS8OSkVN&8bQV7q"
}
``` 

Grab token

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L25ld3NpdGUiLCJpYXQiOjE2OTQyMzczODMsIm5iZiI6MTY5NDIzNzM4MywiZXhwIjoxNjk0ODQyMTgzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.iKxocUM-zoBe4JxZPd-qaFzGV0HU1GpCGkP68yqKEKc 

and then add token to the post new post:

POST 
http://localhost/newsite/wp-json/wp/v2/posts
Content-Type: application/json
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L25ld3NpdGUiLCJpYXQiOjE2OTQyMzczODMsIm5iZiI6MTY5NDIzNzM4MywiZXhwIjoxNjk0ODQyMTgzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.iKxocUM-zoBe4JxZPd-qaFzGV0HU1GpCGkP68yqKEKc

in body go to raw and add json

```json
{
    "title": "Post one",
    "content": "This is post one",
    "status": "publish"
}
``` 



### Install Customs post type UI plugin 
Download: https://uz.wordpress.org/plugins/custom-post-type-ui/ 

create folder custom-post-type-ui in wp-content/plugins 
and copy data from uzipped archive 

Activate plugin 

Add new type

books
book 

enable REST API 

then save type 

Books will appear 
Then add book

Then 
GET http://localhost/newsite/wp-json/wp/v2/books

You can add Params
per_page   1 

http://localhost/newsite/wp-json/wp/v2/books?per_page=1 


### Install advanced custom fields plugin 
Download 
https://wordpress.org/plugins/advanced-custom-fields/ 

https://www.youtube.com/watch?v=fFNXWinbgro 
17 mins 
chromium 

install acf to rest api 
https://wordpress.org/plugins/acf-to-rest-api/ 

ACF 
Field groups 
add new 

### Create react app with vite 

```bash
npx create-react-app frontend --template typescript

cd fronend

npm install axios @types/axios react-router-dom @types/react-router-dom
```