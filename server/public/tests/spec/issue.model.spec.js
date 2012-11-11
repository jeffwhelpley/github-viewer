/**
 * Test the IssueModel to get an issue
 */
define(["issueModel"], function(IssueModel) {
    describe("issue model 8117", function () {
        it("state is closed", function () {
            var issueModel = new IssueModel({ issueNumber: '8117' });
            issueModel.fetch({
                success: function(model, response, options) {
                    model.set(response);
                    expect(model.get("state")).toEqual("closed");
                },
                error: function(model, xhr, options) {
                    throw "error getting issue model";
                }
            });
        });
    });
});
