function addComments(repo_url, api_url, repo_nwo, issue_id) {
    const url = repo_url + "/issues/" + issue_id
    const gh_api_url = api_url + "/repos/" + repo_nwo + "/issues/" + issue_id + "/comments"
    console.log("Loading comments")
    console.log("url:", url)
    console.log("api_url:", gh_api_url)

    $.ajax(gh_api_url, {
        headers: {Accept: "application/vnd.github.v3.html+json"},
        dataType: "json",
        success: function(comments) {
            $("#gh-comments-list").append("<div id='gh-comment-btn'><a class='buttons github' href='" + url + "'>Comment on GitHub</a></div>")
            $.each(comments, function(i, comment) {
                console.log("Got comment:", comment)

                const date = new Date(comment.created_at)

                let t = "<div id='gh-comment'>"
                t += "<img src='" + comment.user.avatar_url + "' width='24px'>"
                t += "<b><a href='" + comment.user.html_url + "'>" + comment.user.login + "</a></b>"
                t += " posted at "
                t += "<em>" + date.toUTCString() + "</em>"
                t += "<div id='gh-comment-hr'></div>"
                t += comment.body_html
                t += "</div>"
                $("#gh-comments-list").append(t)
            })
        },
        error: function() {
            $("#gh-comments-list").append("Comments are not open for this post yet.")
        }
    })
}

