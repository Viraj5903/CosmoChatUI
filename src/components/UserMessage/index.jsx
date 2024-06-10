import { Typography, Grid } from "@mui/material"; // Importing necessary components from Material-UI.
import ChatStyles from "../../styles/chat"; // Importing styles for the chat component.

/**
 * Component for rendering user messages.
 * @param {Object} props - Props object containing the user message text.
 * @param {string} props.userMessage - Text content of the user message.
 * @returns {JSX.Element} JSX element representing the user message.
 */
const UserMessage = ({ userMessage }) => {
  return (
    // Grid container for user message with styles from ChatStyles.userMessage.
    <Grid { ...ChatStyles.userMessage }>
      {/* Typography component for user message text with styles from ChatStyles.userMessageText. */}
      <Typography { ...ChatStyles.userMessageText }>
        {/* Displaying the user message text. */}
        {userMessage}
      </Typography>
    </Grid>
  );
};

export default UserMessage; // Exporting the UserMessage component.
