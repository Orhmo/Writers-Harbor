export const BASE_URL =
  "https://teamwork-backend-290z.onrender.com/api/v1" // ----> DEV ENV ----> DEV ENV


//AUTHENTICATION
export const SIGN_IN = "/auth/login"
export const CREATE_USER = "/users"

//GIF
export const CREATE_GIF = "/gifs"
export const DELETE_GIF = "/gifs/<:gifId>"
export const GET_SPECIFIC_GIF = "/gifs/<:gifId>"

//ARTICLES
export const CREATE_ARTICLE = "/articles"
export const EDIT_ARTICLE = "/articles/<:articleId>"
export const DELETE_ARTICLE = "/articles/<:articleId>"
export const GET_SPECIFIC_ARTICLE = "/articles/<:articleId>"

//COMMENTS
export const POST_COMMENTS = "/articles/<articleId>/comment"
export const POST_GIF_COMMENTS = " /gifs/<:gifId>/comment"

//FEED
export const GET_FEED = "/feed"

