// Import necessary components and hooks from React and Material-UI
import React, { useEffect, useState } from "react"; // Importing React and useState and useEffect hook for state management.
import api from "../../api/session"; // Importing API utility for session management
import {
  Grid, // Material-UI Grid component for layout
  CircularProgress, // Material-UI CircularProgress component for loading indicator
  Typography, // Material-UI Typography component for text
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart"; // Importing BarChart component from Material-UI x-charts for data visualization
import ActivityStyles from "../../styles/activity"; // Importing custom styles for the activity component
import ActivityChatHistory from "../../components/ActivityChatHistory";
import useMediaQuery from "@mui/material/useMediaQuery"; // Importing useMediaQuery hook for responsive design
import AllStyles from "../../styles/home";
import WidthError from "../../components/WidthError";


/**
 * Activity component for displaying user's chat activity statistics
 * @returns {JSX.Element} JSX element representing the Activity component
 */
const Activity = () => {
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to manage session dates
  const [sessionDates, setSessionDates] = useState([]);
  // State to manage the number of chats in each session
  const [sessionChatLengths, setSessionChatLengths] = useState([]);
  // State to manage the list of sessions
  const [sessions, setSessions] = useState([]);
  // useMediaQuery hook to check if the screen width is at least 600px
  const matches = useMediaQuery("(min-width:600px)");

  // useEffect hook to fetch sessions on component mount
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        // Fetching sessions from the API
        const response = await api.get("/sessions");
        // Reversing the order of sessions to display the most recent first
        setSessions(response.data.reverse());
        // Extracting and setting session dates
        setSessionDates([
          ...Array.from(response.data, (data) => {
            console.log("data.date = ", data.date);
            return data.date.split(",")[0]
          }),
        ]);
        // Extracting and setting the number of chats in each session
        setSessionChatLengths([
          ...Array.from(response.data, (data) => data.chats.length),
        ]);
        // Setting loading to false after data is fetched
        setLoading(false);
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

  // Returning the JSX for the Activity component
  return (
    // If the screen size is more than 600px then displaying the message to set the width to 600px else displaying the content.
    matches ? (
      <WidthError />
    ) : (
      // Grid container for the main layout
      <Grid container {...ActivityStyles.activityBody}>
        {/* Grid for displaying the title */}
        <Grid container item {...ActivityStyles.titleOutline}>
          <Typography {...ActivityStyles.title}>Your Statistics</Typography>
        </Grid>
        {/* Grid for displaying the description */}
        <Grid container item>
          <Typography {...ActivityStyles.description}>
            Graph of the conversation you had with ReX.
          </Typography>
        </Grid>
        {/* Grid for displaying the bar chart */}
        <Grid container item>
          {loading ? (
            <CircularProgress /> // Display loading indicator while data is being fetched
          ) : (
            <BarChart
              xAxis={[{ scaleType: "band", data: [...sessionDates] }]} // X-axis data for the bar chart
              series={[{ data: [...sessionChatLengths] }]} // Data series for the bar chart
              width={500}
              height={300}
            />
          )}
          {/* {console.log("sessions = ", sessions)}
          {console.log("sessionChatLengths = ", sessionChatLengths)}
          {console.log("sessionDates = ", sessionDates)} */}
        </Grid>
        {/* Grid for displaying individual chat history */}
        <Grid>
          {loading ? (
            <CircularProgress {...AllStyles.circularProgressStyle}/> // Display loading indicator while data is being fetched
          ) : (
            <>
              <Typography {...ActivityStyles.description}>
                Active Chat:
              </Typography>
              {sessions.map((session, i) => {
                return !session.isSessionEnded ? (
                  <ActivityChatHistory 
                    key={session.id} // Unique key for each ChatHistory component
                    date={session.date} // Session date
                    chatsLength={session.chats.length} // Number of chats in the session
                  />
                ) : null
              })}
              <Typography {...ActivityStyles.description}>
                Ended Chats:
              </Typography>
              {sessions.map((session, i) =>
                session.isSessionEnded && i < 4 ? ( // Display only ended sessions and limit to 4
                  <ActivityChatHistory
                    key={session.id} // Unique key for each ChatHistory component
                    date={session.date} // Session date
                    chatsLength={session.chats.length} // Number of chats in the session
                  />
                ) : null
              )}
            </>
          )}
        </Grid>
      </Grid>
    )
  );
};

// Exporting the Activity component as the default export
export default Activity;