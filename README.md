## Endpoints

#### **GET /good/:id.jpg**
Returns an image. Those images are supossed to be invalid.
Currently it doesn't return an actual image, only text.

#### **GET /bad/:id.jpg**
Returns an image. Those images are supossed to be invalid.
Currently it doesn't return an actual image, only text

#### **POST /validate**
Indicates whether the image is or not valid. Valid images are the ones with "good" URLs (they match the regex `/^https?:\/\/.*\/good\/.*\.jpg$/`)

Example request:
```json
{
	"url": "http://aserver.com/extras/good/moreextras/image.jpg",
}
```
Example response:
```json
{
	"valid": true,
}
```

If you want to test this in [heroku](https://heroku.com/), you will need to create an account there and install heroku client on your system.

- To create an app: `heroku create`
- If you already have an app: `heroku git:remote -a your-app-name`
- To deploy your changes: `git push heroku master`
- To deploy a branch: `git push heroku <branch_to_deploy>:master`
