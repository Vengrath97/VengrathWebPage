// Example JavaScript for interactive features

// Function to handle adding a new comment
function addComment() {
    // Get input values
    var commenterName = document.getElementById('commenterName').value;
    var commentText = document.getElementById('commentText').value;

    // Validate input (basic validation for demonstration)
    if (commenterName.trim() === '' || commentText.trim() === '') {
        alert('Please enter your name and comment text.');
        return;
    }

    // Create comment HTML structure
    var commentHTML = '<div class="comment">';
    commentHTML += '<h4>' + commenterName + '</h4>';
    commentHTML += '<p>' + commentText + '</p>';
    commentHTML += '</div>';

    // Append new comment to comments section
    var commentsSection = document.getElementById('commentsSection');
    commentsSection.innerHTML += commentHTML;

    // Clear input fields after adding comment
    document.getElementById('commenterName').value = '';
    document.getElementById('commentText').value = '';
}

// Event listener for the submit button
document.getElementById('submitComment').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    addComment(); // Call function to add comment
});
