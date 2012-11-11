/**
 * views/issue.list/issue.list.data
 *
 * Sample issue json taken from https://api.github.com/repos/rails/rails/issues?page=1&per_page=2
 */
define(['models/issue.collection'], function (IssueCollection) {
    "use strict";

    return new IssueCollection(
        [
            {
                "pull_request": {
                    "diff_url": null,
                    "html_url": null,
                    "patch_url": null
                },
                "closed_at": null,
                "updated_at": "2012-11-09T19:38:11Z",
                "milestone": null,
                "state": "open",
                "html_url": "https://github.com/rails/rails/issues/8159",
                "labels": [
                    {
                        "color": "FFF700",
                        "url": "https://api.github.com/repos/rails/rails/labels/actionpack",
                        "name": "actionpack"
                    }
                ],
                "created_at": "2012-11-09T16:45:30Z",
                "comments": 0,
                "url": "https://api.github.com/repos/rails/rails/issues/8159",
                "body": "For ordinary routes like this\r\n````ruby\r\nget 'general/home' => 'general#home'\r\n````\r\n\r\nany of the request methods will match it in controller tests. For example, this test will pass:\r\n\r\n````ruby\r\nrequire 'test_helper'\r\n\r\nclass GeneralControllerTest < ActionController::TestCase\r\n    test \"should not succeed\" do\r\n        get :home\r\n        assert_response :success\r\n\r\n        post :home\r\n        assert_response :success\r\n\r\n        put :home\r\n        assert_response :success\r\n\r\n        delete :home\r\n        assert_response :success\r\n\r\n        head :home\r\n        assert_response :success\r\n    end\r\nend\r\n````\r\n\r\nThis is also documented here: http://stackoverflow.com/questions/9104546/rails-post-member-route-responds-to-all-request-types\r\n\r\nI haven't tested every combination, but it doesn't seem to matter what request type is defined in the route, or whether it's part of a resource.\r\n\r\nRails 3.2.8 on Ruby 1.9.3.",
                "assignee": null,
                "user": {
                    "gravatar_id": "22a45442b3218aa61667925bff375dc4",
                    "login": "danbob",
                    "url": "https://api.github.com/users/danbob",
                    "avatar_url": "https://secure.gravatar.com/avatar/22a45442b3218aa61667925bff375dc4?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
                    "id": 1530175
                },
                "title": "Routes respond to all requests types in functional tests",
                "id": 8245019,
                "number": 8159
            },
            {
                "pull_request": {
                    "diff_url": "https://github.com/rails/rails/pull/8156.diff",
                    "html_url": "https://github.com/rails/rails/pull/8156",
                    "patch_url": "https://github.com/rails/rails/pull/8156.patch"
                },
                "closed_at": null,
                "updated_at": "2012-11-09T11:16:13Z",
                "milestone": null,
                "state": "open",
                "html_url": "https://github.com/rails/rails/issues/8156",
                "labels": [
                    {
                        "color": "FC9300",
                        "url": "https://api.github.com/repos/rails/rails/labels/activesupport",
                        "name": "activesupport"
                    }
                ],
                "created_at": "2012-11-09T11:12:51Z",
                "comments": 2,
                "url": "https://api.github.com/repos/rails/rails/issues/8156",
                "body": "Description of this bug: https://github.com/rails/rails/issues/8015",
                "assignee": null,
                "user": {
                    "gravatar_id": "2735068c913a072744a799e3c0833b7b",
                    "login": "fredwu",
                    "url": "https://api.github.com/users/fredwu",
                    "avatar_url": "https://secure.gravatar.com/avatar/2735068c913a072744a799e3c0833b7b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
                    "id": 31945
                },
                "title": "Fix for inflector's incorrect camelCase replacement for acronyms",
                "id": 8234393,
                "number": 8156
            }
        ]
    );

});
