/**
 * Object defining styles for chat history components.
 */
const ChatHistoryStyles = {
  /**
   * Style definition for chatHistory Component container.
   */
  chatHistoryContainer: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Specifies margin at the bottom of the chat history component to add margin between components.
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns content along the main axis to the start.
       */
      marginBottom: "25px",
      flexDirection: "row", // Sets the direction of flex items to row-reverse, aligning items to the end of the row.
      justifyContent: "start" // Aligns items to the end of the container.
    }
  },
  /**
   * Style definition for the outline of chat history.
   */
  outLine: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns content along the main axis to the start.
       * Sets the direction of the flex container to row.
       * Provides padding around the chat history outline.
       * Aligns items along the cross axis to the start.
       * Defines the gap between child elements.
       * Adds rounded corners to the chat history outline.
       * Sets the background color of the chat history outline.
       * Specifies margin.
       */
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
      padding: "24px",
      alignItems: "start",
      gap: "20px",
      borderRadius: "30px",
      backgroundColor: "lightgrey",
      margin: "0px"
    },
  },
  /**
   * Style definition for the title text.
   */
  title: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the color of the title text.
       * Specifies the font family for the title text.
       * Sets the font size of the title text.
       * Specifies the font style for the title text.
       * Sets the font weight of the title text.
       */
      color: "black",
      fontFamily: "Arial",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
    },
  },
  /**
   * Style definition for the body text.
   */
  bodyText: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with columns, arranging child elements vertically.
       * Aligns content along the main axis to the start.
       * Aligns items along the cross axis to the start.
       * Defines the gap between child elements.
       * Sets the width of the text container to 100%.
       * Aligns the text container to stretch to fit its parent width.
       */
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "8px",
      width: "100%",
      alignSelf: "stretch"
    },
  },
  /**
   * Style definition for the text container.
   */
  text: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the color of the body text.
       * Specifies the font family for the body text.
       * Aligns text to the left.
       * Sets the font size of the body text.
       * Specifies the font style for the body text.
       * Sets the font weight of the body text.
       */
      color: "black",
      fontFamily: "Arial",
      textAlign: "left",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
    },
  },
  /*
   * Style definition for the delete button.
   */
  deleteButton: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Sets the width and height of the delete button.
       * Provides padding inside the delete button.
       * Adds rounded corners to the delete button.
       * Sets the background color of the delete button.
       */
      display: "flex",
      height: "100%",
      width: "100%",
      padding: "25px",
      borderRadius: "0 30px 30px 0",
      background: "red",
    },
  },
  /**
   * Style definition for the pop-up container.
   */
  popUp: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the width and height of the pop-up container.
       * Flexbox layout with columns, arranging child elements vertically.
       * Aligns content along the main axis to the center.
       * Aligns items along the cross axis to the center.
       * Adds rounded corners to the pop-up container.
       * Defines the gap between child elements.
       * Sets the text alignment inside the pop-up container.
       */
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "45px",
      gap: "30px",
      textAlign: "center",
    },
  },
  /**
   * Style definition for the title text inside the pop-up.
   */
  popUpTextTitle: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Specifies the font family for the title text inside the pop-up.
       * Sets the font size of the title text inside the pop-up.
       * Sets the font weight of the title text inside the pop-up.
       * Sets the text alignment for the title text inside the pop-up.
       * Sets the color of the title text inside the pop-up.
       */
      fontFamily: "Arial",
      fontSize: "24px",
      fontWeight: 700,
      textAlign: "center",
      color: "black",
    },
  },
  /**
   * Style definition for the buttons container inside the pop-up.
   */
  popUpButtons: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with columns, arranging child elements vertically.
       * Defines the gap between child elements.
       */
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
  },
  /**
   * Style definition for the delete button inside the pop-up.
   */
  buttonDelete: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Provides padding inside the delete button inside the pop-up.
       * Sets the border radius of the delete button inside the pop-up.
       * Sets the background color of the delete button inside the pop-up.
       * Transforms text to capitalize in the delete button inside the pop-up.
       * Sets the color of the text in the delete button inside the pop-up.
       * Specifies the font family for the text in the delete button inside the pop-up.
       * Sets the font weight of the text in the delete button inside the pop-up.
       * Sets the font size of the text in the delete button inside the pop-up.
       * Adds hover effect on the end chat button.
       */
      padding: "20px",
      borderRadius: "100px",
      background: "darkblue",
      textTransform: "Capitalize",
      color: "white",
      font: "Arial",
      weight: 700,
      fontSize: "16px",
      "&:hover": {
        backgroundColor: "darkblue",
      }
    },
  },
  /**
   * Style definition for the cancel button inside the pop-up.
   */
  buttonCancel: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Provides padding inside the cancel button inside the pop-up.
       * Sets the border radius of the cancel button inside the pop-up.
       * Defines the gap between child elements.
       * Sets the background color of the cancel button inside the pop-up.
       * Transforms text to capitalize in the cancel button inside the pop-up.
       * Sets the color of the text in the cancel button inside the pop-up.
       * Specifies the font family for the text in the cancel button inside the pop-up.
       * Sets the font weight of the text in the cancel button inside the pop-up.
       * Sets the font size of the text in the cancel button inside the pop-up.
       */
      padding: "15px",
      borderRadius: "100px",
      gap: "10px",
      background: "white",
      textTransform: "Capitalize",
      color: "darkblue",
      font: "Arial",
      weight: 700,
      fontSize: "16px"
    },
  },
  /**
   * Style definition for the of activity chat history.
   */
  activityChat: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Defines the gap between child elements.
       * Provides padding around the chat history outline.
       * Adds rounded corners to the chat history outline.
       * Sets the background color of the chat history outline.
       * Specifies margin.
       */
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      gap: "20px",
      padding: "24px",
      borderRadius: "30px",
      backgroundColor: "lightgrey",
      marginBottom: "25px"
    },
  },
};

export default ChatHistoryStyles;
