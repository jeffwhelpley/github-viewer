/**
 * views/issue.details/issue.details.data
 */
define(['models/issue.comment.collection'], function (IssueCommentCollection) {
    "use strict";

    return new IssueCommentCollection(
        [
            {
                "created_at": "2012-11-09T11:13:08Z",
                "body": "PR for 3.2 branch: https://github.com/rails/rails/pull/8155",
                "user": {
                    "avatar_url": "https://secure.gravatar.com/avatar/2735068c913a072744a799e3c0833b7b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
                    "url": "https://api.github.com/users/fredwu",
                    "gravatar_id": "2735068c913a072744a799e3c0833b7b",
                    "id": 31945,
                    "login": "fredwu"
                },
                "updated_at": "2012-11-09T11:13:08Z",
                "url": "https://api.github.com/repos/rails/rails/issues/comments/10222594",
                "id": 10222594
            },
            {
                "created_at": "2012-11-09T11:16:13Z",
                "body": "/cc @fxn",
                "user": {
                    "avatar_url": "https://secure.gravatar.com/avatar/233c279c012ebac792aaa805f966cbc7?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
                    "url": "https://api.github.com/users/steveklabnik",
                    "gravatar_id": "233c279c012ebac792aaa805f966cbc7",
                    "id": 27786,
                    "login": "steveklabnik"
                },
                "updated_at": "2012-11-09T11:16:13Z",
                "url": "https://api.github.com/repos/rails/rails/issues/comments/10222656",
                "id": 10222656
            }
        ]
    );

});
