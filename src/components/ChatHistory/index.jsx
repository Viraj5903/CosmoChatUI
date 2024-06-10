import React, { useState } from "react"; // Importing React and useState hook for state management.
import { Grid, Button } from "@mui/material"; // Importing Grid and Button components from Material-UI.
import Images from "../../constants/images"; // Importing image constants.
import ChatHistoryStyles from "../../styles/chatHistory"; // Importing styles for chat history component.
import { useNavigate } from "react-router"; // Importing useNavigate hook from React Router.
import Dialog from "@mui/material/Dialog"; // Importing Dialog component from Material-UI.
import DialogActions from "@mui/material/DialogActions"; // Importing DialogActions component from Material-UI.
import DialogContent from "@mui/material/DialogContent"; // Importing DialogContent component from Material-UI.
import DialogContentText from "@mui/material/DialogContentText"; // Importing DialogContentText component from Material-UI.
import DialogTitle from "@mui/material/DialogTitle"; // Importing DialogTitle component from Material-UI.

/**
 * Component for rendering chat history entries.
 * @param {Object} props - Props object containing chat history data.
 * @param {string} props.id - Unique identifier for the chat session.
 * @param {string} props.date - Date of the chat session.
 * @param {string} props.lastChatText - Last text message exchanged in the chat session.
 * @param {boolean} props.sessionEnded - Flag indicating if the chat session has ended.
 * @param {Function} props.handleDelete - Function to handle deletion of chat session.
 * @param {boolean} props.isActivity - Flag indicating if the chat history entry is for activity.
 * @param {number} props.chatsLength - Number of messages exchanged in the chat session.
 * @returns {JSX.Element} JSX element representing the chat history entry.
 */
const ChatHistory = ({
  id,
  date,
  lastChatText,
  sessionEnded,
  handleDelete,
}) => {
  // State for tracking if the chat history entry is being dragged.
  const [dragged, setDragged] = useState(false); // Initializing state to track dragging state.

  // useNavigate is a React Router hook that facilitates navigation within React applications by providing a navigate function. This function enables seamless redirection to different URLs within the application without directly manipulating the browser's history object. It simplifies navigation management by abstracting away the complexities associated with routing, making it easier to implement dynamic routing and page transitions. By leveraging useNavigate, developers can enhance the user experience by creating fluid navigation flows while maintaining clean and maintainable code structures. This hook essentially streamlines the process of navigating between pages in React applications, offering a more intuitive and efficient development experience.
  // Hook for navigation functionality.
  const navigator = useNavigate(); // Initializing navigation hook.

  // State and event handlers for dialog functionality.
  const [anchorEl, setAnchorEl] = useState(null); // Initializing state for anchor element of dialog.
  const open = Boolean(anchorEl); // Boolean value derived from anchor element state.

  /**
   * Function to open the delete chat dialog.
   * @param {Event} event - The event object.
   */
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget); // Setting the anchor element for the dialog.
  };

  /**
   * Function to close the delete chat dialog.
   */
  const handleClose = () => {
    setAnchorEl(null); // Closing the dialog.
  };

  /**
   * Function to handle the drag event.
   */
  const handleDrag = () => {
    setDragged((prev) => !prev); // Toggling the dragged state.
  };

  /**
   * Function to navigate to the chat session.
   */
  const handleLink = () => {
    navigator(`/sessions/${id}`); // Navigating to the chat session.
  };

  // Returning the JSX component for ChatHistory.
  return (
    // React fragment to encapsulate multiple elements without adding extra nodes to the DOM.
    <>
      {/* Rendering for chat history entry */}
      <Grid
        container // The Grid container prop enables it to behave like a flexbox container.
        {...ChatHistoryStyles.chatHistoryContainer}
      >
        {/* Grid for displaying chat history entry */}
        <Grid
          item // Indicates this Grid is a flex item.
          {...ChatHistoryStyles.outLine} // Applying styles from ChatHistoryStyles.outLine.
          onDoubleClick={handleLink} // Event handler for double-click to navigate. To run double click event devtools must be close.
          onClick={sessionEnded ? handleDrag : handleLink} // Event handler for click to handle drag or navigate.
          style={{ flex: dragged ? "6" : "7" }} // Flex ratio based on ended session is click or dragged for make space of delete button.
        >
          <Grid>
            <img src={Images.HomeRex} alt="ReX" style={{ width: "80px" }} /> {/* Image for chat history entry */}
          </Grid>
          {/* Conditional rendering for session end */}
          <Grid {...ChatHistoryStyles.bodyText}>
            {sessionEnded === true ? (
              <Grid {...ChatHistoryStyles.title}>ReX - {date}</Grid> // Title for ended session.
            ) : (
              <Grid {...ChatHistoryStyles.title}>ReX</Grid> // Title for ongoing session.
            )}
            <Grid {...ChatHistoryStyles.text}>{lastChatText}</Grid> {/* Body text of the chat history entry */}
          </Grid>
          {/* Conditional rendering for typing indicator */}
          {sessionEnded === false ? (
            <Grid paddingTop="25px">
              <img src={Images.Typing} alt="typing" /> {/* Typing indicator image */}
            </Grid>
          ) : null}
        </Grid>
        {/* Conditional rendering based on session end state */}
        <Grid
          item // The Grid item prop indicates this Grid is a flex item.
          sx={{ display: dragged ? "block": "none" , flex: "1"}} // Hides the grid item when not being dragged.
        >
          {/* Button to delete chat session */}
          <Button
            {...ChatHistoryStyles.deleteButton} // Applying styles from ChatHistoryStyles.deleteButton.
            onClick={handleOpen} // Event handler for button click to open the dialog.
          >
            {/* Image for delete icon */}
            <img src={Images.Trash} alt="Delete" />
          </Button>
          {/* Dialog for confirming chat deletion */}
          <Dialog
            open={open} // Controls the visibility of the dialog.
            onClose={handleClose} // Event handler for closing the dialog.
            aria-labelledby="responsive-dialog-title" // Sets an accessible label for the dialog.
            {...ChatHistoryStyles.popUp} // Applying styles from ChatHistoryStyles.popUp.
            id="textClose" // ID for the dialog.
          >
            <DialogTitle id="responsive-dialog-title">
              {/* DialogTitle component is used to display the title of the dialog */}
              <img src={Images.HomeRex} alt="homeRex" /> {/* Image for dialog title */}
            </DialogTitle>
            <DialogContent>
              {/* DialogContent component is used to display the content area of the dialog */}
              <DialogContentText {...ChatHistoryStyles.popUpTextTitle}>
                Delete Chat? {/* Text for dialog content */}
              </DialogContentText>
              <DialogContentText>
                Are you sure you want to delete this ended chat? {/* Text for dialog content */}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* DialogActions component is a container for actions (buttons) within the dialog */}
              <Grid container {...ChatHistoryStyles.popUpButtons}>
                <Grid item>
                  <Button
                    onClick={handleDelete} // Event handler for confirming deletion.
                    {...ChatHistoryStyles.buttonDelete} // Applying styles for the delete button.
                  >
                    Yes, Delete {/* Text for delete button */}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleClose} // Event handler for canceling deletion.
                    {...ChatHistoryStyles.buttonCancel} // Applying styles for the cancel button.
                  >
                    Cancel {/* Text for cancel button */}
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
};

export default ChatHistory; // Exporting the ChatHistory component.
