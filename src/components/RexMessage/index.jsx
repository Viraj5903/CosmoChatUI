import { Typography, Grid } from "@mui/material"; // Importing necessary components from Material-UI.
import ChatStyles from "../../styles/chat"; // Importing styles for the chat component.

/**
 * Component for rendering ReX messages.
 * @param {Object} props - Props object containing the ReX message text.
 * @param {string} props.reXMessage - Text content of the ReX message.
 * @returns {JSX.Element} JSX element representing the ReX message.
 */
const ReXMessage = ({ reXMessage }) => {
  return (
    // Grid container for ReX message with styles from ChatStyles.reXMessage.
    <Grid { ...ChatStyles.reXMessage }>
      {/* Typography component for ReX message text with styles from ChatStyles.reXMessageText. */}
      <Typography { ...ChatStyles.reXMessageText }>
        {/* Displaying the ReX message text. */}
        {reXMessage}
      </Typography>
    </Grid>
  );
};

export default ReXMessage; // Exporting the ReXMessage component.
