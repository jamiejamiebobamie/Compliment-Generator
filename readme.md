This is a web application launched with nodemon. Users submit compliments to a mongodb database. A random entry is pulled from the database and displayed when the user visits the main page. Only the admin can edit/update and delete compliments, and see an index of all compliments in the database.

The code follows the standard MVC architecture, and CRUDS a single resource: compliments.


LIVE WEBSITE: https://compliments-jtm.herokuapp.com



v2.0 features that have NOT been implemented:

"upvotes":
An attribute on the Compliment model, "number" type. The more "upvotes" the compliment has, the higher the chance of being pulled from the database.

"flagged":
An attribute on the Compliment model, "boolean" type. Compliments that are deemed inappropriate can be
flagged by users.

"ignoreFlag":
An attribute on the Compliment model, "boolean" type. Compliments that have been reviewed by the admin and cannot be flagged again by users.

"time":
An attribute on the Compliment model, "number" type. Meant to timestamp the compliment when added to the database.




v3.0 features that have NOT been implemented:

NEW RESOURCE: "User"

Users assign hashtags to compliments. The hashtags are associated with both the compliment they are assigned to and the user profile that assigns them. After assigning a hashtag to a compliment, the user is then able to see compliments with this hashtag.

User profiles consisting of hashtag associations curate the experience, determining which compliments appear on the users’ homepage. This encourages content creation: In order to see the desired compliments, the user must submit their own original compliment with the desired hashtag.
