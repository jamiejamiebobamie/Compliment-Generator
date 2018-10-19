This is a web application launched with nodemon. Users submit compliments to a mongodb database. A random entry is pulled from the database and displayed when the user visits the main page. Only the admin can edit/update and delete compliments, and see an index of all compliments in the database.


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

User profiles consisting of "identities" curate the experience. Users' "groups" determine which compliments appear on the homepage.

Users assign hashtags like "#blackgirlmagic" (for example) to compliments that allow for user-created identities. The hashtags are associated with both compliments and user profiles. Once assigning "#blackgirlmagic" to a compliment, the user is then able to see other compliments with this hashtag and effectively joins this group.

This creates "bottom-up" identities, in which the user creates and assigns herself an identity, instead of a "top-down" approach with pre-determined fields/categories, chosen from a drop-down menu.

Also: to join a group you have to contribute to it, which forces content creation, at least initially.
