import Images from "../../constants/images"; // Importing image constants.
import chatHistoryStyles from "../../styles/chatHistory"; // Importing styles for chat history component.
import { Grid } from "@mui/material"; // Importing Grid component from Material-UI.

/**
 * Component for rendering activity chat history entries.
 * @param {Object} props - Props object containing chat history data.
 * @param {string} props.date - Date of the chat session.
 * @param {number} props.chatsLength - Number of messages exchanged in the chat session.
 * @returns {JSX.Element} JSX element representing the chat history entry.
 */
const ActivityChatHistory = function({chatsLength , date}) {
    // Rendering for activity entry
    return (
            <>
            <Grid {...chatHistoryStyles.activityChat}> {/* Applying styles from chatHistoryStyles.activityChat */}
                <Grid>
                    <img src={Images.Clock} alt="Clock" style={{ width: "48px" }} /> {/* Image for activity icon */}
                </Grid>
                <Grid {...chatHistoryStyles.bodyText}>
                    <Grid {...chatHistoryStyles.title}>ReX - {date}</Grid> {/* Title for activity entry */}
                    <Grid {...chatHistoryStyles.text}>
                    {/* Displaying message count */}
                    {chatsLength > 1
                        ? `${chatsLength} Messages` /* Plural form if message count > 1 */
                        : `${chatsLength} Message`} {/* Singular form if message count = 1 */}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ActivityChatHistory;