// Define the type for a single comment
export type CommentType = {
    userId: string;
    content: string;
    commentedAt: string;
    replies: CommentType[]; // Recursive type definition for nested replies
  };
  
  // Define the type for the data containing multiple comments
  export type CommentDataType = {
    comments: CommentType[];
  };
  