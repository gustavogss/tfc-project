enum Messages {
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  MUST_FILEDS_FILLED = 'All fields must be filled',
  EMAIL_OR_PASSWORD_INVALID = 'Incorrect email or password',
  TOKEN_NOT_FOUND = 'Token not found',
  PASSWORD_LENGTH_SIX = 'Password must be at least 6 characters long',
  TOKEN_INVALID = 'Invalid token',
  USER_NOT_FOUND = 'User not found',
  INVALID_PASSWORD = 'Password Invalid',
  TOKEN_MUST_VALIDATED = 'Token must be a valid token',
  TEAM_NOT_FOUND = 'Team not found',
  TEAM_NO_SUCH_ID = 'There is no team with such id!',
  MATCH_NOT_FOUND = 'Match not found',
  TWO_MATCH_EQUAL = 'It is not possible to create a match with two equal teams',
  FINISH_MATCH = 'Finished',
  UPDATED_MATCH = 'Updated match',
}
export default Messages;
