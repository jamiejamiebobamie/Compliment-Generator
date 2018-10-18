This is a web application launched with nodemon that uses a mongodb database. Users submit compliments to the database. A random entry is pulled from the database and displayed when the user visits the main page. Only the admin can edit/update and delete compliments, and see an index of all compliments in the database.



v2.0 features that have NOT been implemented:

"upvotes":
An attribute on the Compliment model, "number" type. The more "uplikes" the compliment has, the higher the chance of being pulled from the database.

"flagged":
An attribute on the Compliment model, "boolean" type. Compliments that are deemed inappropriate can be
flagged by users.

"ignoreFlag":
An attribute on the Compliment model, "boolean" type. Compliments that have been reviewed by the admin and cannot be flagged again by users.

"time":
An attribute on the Compliment model, "number" type. Meant to timestamp the compliment when added to the database.




Pie in the sky // v3.0 features that have NOT been implemented:

NEW RESOURCE: "User"

User profiles consisting of "identities" curate the experience. Users' "in-groups" determine which compliments are generated.

Compliments are created with a user-input, hashtag field, like "#blackgirlmagic" that allows for user-created fields and identities. The hashtags will be both associated with the compliment with which they are assigned and with the user profile that assigned it. Once assigning "#blackgirlmagic", the user is then able to see other compliments with this hashtag and effectively joins this in-group. This creates "bottom-up" identities, in which the user creates and assigns herself the identity, instead of a "top-down" approach of pre-determined fields/categories, chosen from a drop-down menu.
