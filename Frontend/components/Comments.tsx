import { CommentType } from "@/type";
import React, { useState } from "react";
import TimeAgo from "javascript-time-ago";

type CommentProps = {
  comment: CommentType;
};

const Comments: React.FC<CommentProps> = ({ comment }) => {
  const timeAgo = new TimeAgo("en-US");
  const [areRepliesVisible, setAreRepliesVisible] = useState(false);
  const [isReplyFormVisible, setIsReplyFormVisible] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const toggleReplies = () => {
    setAreRepliesVisible(!areRepliesVisible);
  };

  const toggleReplyForm = () => {
    setIsReplyFormVisible(!isReplyFormVisible);
  };

  const handleReplyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyContent(event.target.value);
  };

  const handleReplySubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (replyContent.trim()) {
      // Handle reply submission (e.g., send to API or update state)
      console.log("Reply submitted:", replyContent);

      // Reset reply content and hide form after submission
      setReplyContent("");
      setIsReplyFormVisible(false);
    }
  };

  return (
    <article className="p-6 mb-3 text-base bg-white dark:border-gray-700 dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt={comment.userId}
            />
            User {comment.userId}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {timeAgo.format(new Date(comment.commentedAt))}
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.content}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
          onClick={toggleReplyForm}
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          {isReplyFormVisible ? "Cancel" : "Reply"}
        </button>
        {comment.replies && comment.replies.length > 0 && (
          <button
            onClick={toggleReplies}
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
          >
            {areRepliesVisible
              ? "Hide replies"
              : `Show replies (${comment.replies.length})`}
          </button>
        )}
      </div>

      {/* Reply Form */}
      {isReplyFormVisible && (
        <form onSubmit={handleReplySubmit} className="mt-4">
          <textarea
            className="w-full p-2 mb-2 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="Write your reply..."
            value={replyContent}
            onChange={handleReplyChange}
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-[#ffa59c]"
          >
            Submit
          </button>
        </form>
      )}

      {/* Render replies if they are visible */}
      {areRepliesVisible && comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 pl-6 border-l border-gray-200 dark:border-gray-600">
          {comment.replies.map((reply, index) => (
            <Comments key={index} comment={reply} />
          ))}
        </div>
      )}
    </article>
  );
};

export default Comments;
