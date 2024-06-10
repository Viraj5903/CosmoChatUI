// Import necessary components and hooks from React and Material-UI
import React, { useEffect, useState } from "react"; // Importing React and useState and useEffect hook for state management.
import {
  Button, // Material-UI Button component for clickable buttons
  Grid // Material-UI Grid component for layout
} from "@mui/material";
import Textarea from "@mui/joy/Textarea"; // Importing the Textarea component from Joy UI (an experimental part of Material-UI)
import Images from "../../constants/images"; // Importing image constants
import ChatStyles from "../../styles/chat"; // Importing custom styles
import ReXMessage from "../../components/ReXMessage"; // Importing ReXMessage component for displaying messages from ReX
import api from "../../api/session"; // Importing API utility for session management
import OpenAI from "openai"; // Importing OpenAI library for interacting with the OpenAI API
import { useParams } from "react-router-dom"; // Importing useParams hook for accessing route parameters
import UserMessage from "../../components/UserMessage"; // Importing UserMessage component for displaying user messages
import useMediaQuery from "@mui/material/useMediaQuery"; // Importing useMediaQuery hook for responsive design
import WidthError from "../../components/WidthError";

/**
 * Chat component for managing and displaying chat interactions with ReX
 * @returns {JSX.Element} JSX element representing the Chat component
 */
const Chat = () => {
  // Extracting the session ID from the URL parameters
  const { id } = useParams();
  // State to manage the user's input prompt
  const [userPrompt, setUserPrompt] = useState("");
  // State to manage ReX's reply
  // const [reXReply, setReXReply] = useState("");
  // State to manage the list of sessions
  const [sessions, setSessions] = useState([]);
  // State to manage the current session
  const [thisSession, setThisSession] = useState({});
  // Array representing months for date formatting
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  // OpenAI API key
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  // OpenAI instance configured with the API key
  const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
  // useMediaQuery hook to check if the screen width is at least 600px
  const matches = useMediaQuery("(min-width:600px)");
  // Array to manage chat keys
  let chatKeys = [];

  // useEffect hook to fetch sessions on component mount
  useEffect(() => {
    // Async function to fetch sessions
    const fetchSessions = async () => {
      try {
        // Fetching sessions from the API
        const response = await api.get("/sessions");
        // Updating the sessions state with fetched data
        setSessions(response.data);
        // Finding and setting the current session based on the ID
        setThisSession(
          response.data.find(
            (session) => parseInt(session?.id, 10) === parseInt(id, 10)
          )
        );
        // Handling scroll events
        handleScroll();
        window.addEventListener("scroll", handleScroll);
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
      // Cleanup function to remove the scroll event listener
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
    // Calling fetchSessions to fetch the sessions data
    fetchSessions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to handle scroll events
  const handleScroll = () => {
    // eslint-disable-next-line no-unused-vars
    const scrollPosition = window.scrollY;
    // console.log(scrollPosition);
  };

  // Function to handle submission of a new user prompt
  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedSession = {};

    // Delay function to simulate response time
    setTimeout(async function () {
      const date = new Date();
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      // Formatting the date in a readable format
      const formattedDate = months[month] + " " + day + ", " + year;
      try {
        // Calling the OpenAI API to get a response from ReX
        const response = await callOpenAIAPI();
        // Adding the user prompt and ReX's reply to the session's chats
        // console.log("rexReply", reXReply);
        thisSession.chats.push({ user: userPrompt, ReX: response });
        // Creating an updated session object
        updatedSession = {
          id: id,
          date: formattedDate,
          chats: thisSession.chats,
          isSessionEnded: thisSession.isSessionEnded,
        };
        // Generating chat keys for the updated session
        for (let i = 0; i < updatedSession.chats.length; i++) {
          chatKeys.push(Object.keys(updatedSession.chats[i]));
        }
        console.log("chatKeys = ", chatKeys);
      }
      catch(error) {
        alert(error);
        return;
      }
      try {
        // Sending a PATCH request to update the session on the server
        const response = await api.patch(`sessions/${id}/`, updatedSession);
        // Updating the sessions state with the updated session
        setSessions(
          sessions.map((session) =>
            session.id === id ? response.data : session
          )
        );
        // Clearing the user prompt input
        setUserPrompt("");
      } catch (err) {
        // Error handling
        console.log(`Error: ${err.message}`);
      }
    }, 2000);
  };

  // Function to call the OpenAI API and get a response from ReX
  async function callOpenAIAPI() {

    if (userPrompt === "") {
      return "Please enter prompt. It can't be empty."
    }

    try {
      // Sending a request to the OpenAI API to generate a response
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Your name is ReX. You are a career advice assistant. You give advice to user about his career as reply to his prompt. Limit your response to 100 words. You remember the previous conversations and details given by the user.",
          }, 
          {
            role: "user",
            content: userPrompt,
          }
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 100,
      });

      console.log("completion: ", completion);

      return completion.choices[0].message.content;

      // Setting ReX's reply with the response from the OpenAI API
      // setReXReply(completion.choices[0].message.content);
    } catch(error) {
      // Error handling
      console.log("Fetch error: ", error);
      // throw error;
      return "Error in fetch response from OpenAI. Please try again.";
    }
  }

  // Returning the JSX for the Chat component
  return (
    // If the screen size is more than 600px then displaying the message to set the width to 600px else displaying the content.
    matches ? (
      <WidthError />
    ) : (
      <>
        {/* Grid container for the main layout */}
        <Grid>
          {/* Grid for displaying the ReX image */}
          <Grid {...ChatStyles.chatImage}>
            {/* {console.log(Images)} */}
            <img src={Images.HomeRex} alt="ReX" style={{ width: "100%" }} />
          </Grid>
          {/* Grid for displaying the chat messages */}
          <Grid {...ChatStyles.chatDisplayBackground}>
            <Grid {...ChatStyles.chatsContainer}>
              {/* Logging the value of thisSession.chats to the console for debugging */}
              {console.log("thisSession.chats = ", thisSession.chats)}

              {/* 
                Conditional rendering based on the existence and length of thisSession.chats.
                Optional chaining (?.) ensures that if thisSession or thisSession.chats is null or undefined,
                the subsequent accesses (like .length) won't cause an error.
              */}
              {thisSession?.chats?.length
                ? (
                  // If thisSession.chats exists and has a length greater than 0, map over each chat
                  thisSession?.chats?.map((chat, i) =>
                    // Mapping over the keys of each chat object
                    Object.keys(chat).map((k) =>
                      // Rendering ReXMessage or UserMessage components based on the key
                      k === "ReX" ? (
                        // If the key is "ReX", render a ReXMessage component
                        <ReXMessage reXMessage={chat.ReX} key={"rex" + i} />
                      ) : (
                        // If the key is not "ReX", render a UserMessage component
                        <UserMessage userMessage={chat.user} key={"user" + i} />
                      )
                    )
                  )
                )
                : null /* If thisSession.chats doesn't exist or has a length of 0, render nothing */}
            </Grid>
            {/* If the session is active, display the input area for the user prompt */}
            {thisSession && !thisSession.isSessionEnded ? (
              <Grid {...ChatStyles.toSendArea}>
                <Textarea
                  {...ChatStyles.textArea}
                  name="Soft"
                  placeholder="Type a message to ReX ..."
                  variant="soft"
                  onChange={(e) => setUserPrompt(e.target.value)}
                  onFocus={(e) => e.preventDefault()}
                  value={userPrompt}
                />
                <Button {...ChatStyles.sendButton} onClick={handleSubmit}>
                  <img
                    src={Images.SendButton}
                    alt="send"
                    {...ChatStyles.sendButtonImage}
                  />
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </>
    )
  );
};

// Exporting the Chat component as the default export
export default Chat;