// Import necessary components and hooks from React and Material-UI
import React, { useState, useEffect } from "react";  // Importing React and useState and useEffect hook for state management.
import { 
  Grid, // Material-UI Grid component for layout
  Typography // Material-UI Typography component for text
} from "@mui/material";
import ChatHistory from "../../components/ChatHistory"; // Importing ChatHistory component
import api from "../../api/session"; // Importing API utility for session management
import useMediaQuery from "@mui/material/useMediaQuery"; // Importing useMediaQuery hook for responsive design
import WidthError from "../../components/WidthError"; // Importing WidthError component
import AllStyles from "../../styles/home"; // Importing custom styles

/**
 * Functional component representing the list of ended chat sessions.
 * @returns {JSX.Element} JSX element representing the EndedChats component
 */
const EndedChats = () => {
  // State to manage the list of sessions
  const [sessions, setSessions] = useState([]);
  // useMediaQuery hook to check if the screen width is at least 600px
  const matches = useMediaQuery("(min-width:600px)");

  // useEffect hook to fetch sessions on component mount
  useEffect(() => {
    // Async function to fetch sessions
    const fetchSessions = async () => {
      try {
        // Fetching sessions from the API
        const response = await api.get("/sessions");
        // If response data exists, update the sessions state
        if (response && response.data) {
          setSessions(response.data);
        }
      } catch (err) {
        // Error handling
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
    };
    // Calling fetchSessions to fetch the sessions data
    fetchSessions();
  }, []);

  // Function to handle deletion of a session
  /**
   * Function to handle deletion of a session. 
   * This function sends a delete request to the server to delete the session with the specified ID.
   * It then updates the sessions state to remove the deleted session.
   * @param {string} id The ID of the session to be deleted.
   */
  const handleDelete = async (id) => {
    try {
      // Convert id to string
      const ID = id.toString();
      // Send delete request to the server
      await api.delete(`/sessions/${ID}`);
      // Update the sessions state to remove the deleted session
      setSessions(sessions.filter((session) => session.id !== ID));
    } catch (err) {
      // Error handling
      console.log(`Error: ${err.message}`);
    }
  };

  // Returning JSX for EndedChats component
  return (
    // If the screen size is more than 600px, display WidthError component, else display content
    matches ? (
      <WidthError />
    ) : (
      // Grid container for the main layout
      <Grid container>
        <Grid {...AllStyles.ChatsTitle}>
          <Typography {...AllStyles.ChatsTitleText}>
            Ended Chats
          </Typography>
        </Grid>
        <Grid container>
          {/* Mapping over sessions to display ended chats */}
          {sessions.map((session) =>
            session.isSessionEnded ? (
              <ChatHistory
                key={session.id}
                id={session.id}
                date={session.date}
                lastChatText={
                  session?.chats?.length > 0
                          ? session?.chats[session.chats.length - 1].ReX.slice(0,100)
                          : ""
                }
                sessionEnded={session.isSessionEnded}
                handleDelete={() => handleDelete(session.id)}
                isActivity={false}
                chatsLength={session.chats.length}
              />
            ) : null
          )}
        </Grid>
      </Grid>
    )
  );
};

// Exporting EndedChats component as default
export default EndedChats;
