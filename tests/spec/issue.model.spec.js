/**
 * Test the IssueModel to get an issue
 */
define(['../../app/models/issue.model'], function(IssueModel) {
    describe("issue model 8117", function () {
        it("state is closed", function () {
            var issueModel = new IssueModel();
            issueModel.fetch({
                owner:'rails',
                repo:'rails',
                number: '8117',
                success: function() {
                    expect(issueModel.get("state")).toEqual("closed");
                },
                error: function() {
                    expect(issueModel.get("state")).toEqual("closed");
                }
            });
        });
    });
});
