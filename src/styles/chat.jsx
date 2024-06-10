/**
 * Object defining styles for chat components.
 */
const ChatStyles = {
  /** 
   * Style definition for the image in chat. 
  */
  chatImage: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns items along the main axis to the center.
       * Sets the width and height of the image.
       * Specifies margin for positioning.
       */
      display: "flex",
      justifyContent: "center",
      width: "20%",
      height: "20%",
      margin: "auto",
    }
  },
  /**
   * Style definition for the background of chat display area.
   */
  chatDisplayBackground: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Automatically adjusts height based on content.
       * Provides padding around the text display area.
       * Flexbox layout with columns, arranging child elements vertically.
       */
      height: "auto",
      padding: "30px 30px 200px",
      display: "flex",
      flexDirection: "column",
    },
  },
  /**
   * Style definition for the container of chats.
   */
  chatsContainer: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with columns, arranging child elements vertically.
       */
      display: "flex",
      flexDirection: "column",
    }
  },
  /**
   * Style definition for received messages.
   */
  reXMessage: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Provides padding around the received message.
       * Sets the max width of the received message box.
       * Specifies margin bottom for positioning.
       * Floats the message to the left.
       * Clears the message to the both(left and right).
       * Sets align item(align self) to the flex start.
       * Adds rounded corners to the message box.
       * Sets the background color of the received message box.
       */
      display: "flex",
      padding: "20px",
      maxWidth: "300px",
      marginBottom: "20px",
      // Using float and clear
      // float: "left", // Align ReX messages to the left
      // clear: "both", // Ensure proper wrapping of floated elements
      // Using flex and align self
      alignSelf: "flex-start", // Align the item at flex-start (left)
      gap: "10px",
      borderRadius: "20px",
      background: "#DBF6FF",
      // background: "#F5F5F5",
    },
  },
  /**
   * Style definition for the text of received messages.
   */
  reXMessageText: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the color of the received message text.
       * Specifies the font family for the received message text.
       * Sets the font size of the received message text.
       * Specifies the font style for the received message text.
       * Sets the font weight of the received message text.
       */
      color: "black",
      fontFamily: "Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
    },
  },
  /**
   * Style definition for user messages.
   */
  userMessage: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Provides padding around the user message.
       * Sets the max width of the user message box.
       * Specifies margin for positioning.
       * Floats the message to the right.
       * Clears the message to the both(left and right).
       * Sets align item(align self) to the flex end.
       * Adds rounded corners to the message box.
       * Sets the background color of the user message box.
       */
      display: "flex",
      padding: "20px",
      maxWidth: "300px",
      marginBottom: "20px",
      // Using float and clear
      // float: "right", // Align user messages to the right
      // clear: "both", // Ensure proper wrapping of floated elements
      // Using flex and align self
      alignSelf: "flex-end", // Align the item at flex-end (right)
      borderRadius: "20px",
      background: "darkblue",
    },
  },
  /**
   * Style definition for the text of user messages.
   */
  userMessageText: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the color of the user message text.
       * Specifies the font family for the user message text.
       * Sets the font size of the user message text.
       * Specifies the font style for the user message text.
       * Sets the font weight of the user message text.
       */
      color: "white",
      fontFamily: "Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
    },
  },
  /**
   * Style definition for the area to input and send messages.
   */
  toSendArea: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Defines the gap between child elements.
       * Sets the position of the send area to be fixed at the bottom.
       * Specifies the distance from the bottom of the viewport.
       * Sets the width of the send area.
       * Specifies margin for positioning.
       */
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      position: "fixed",
      bottom: 50,
      width: "90%",
    },
  },
  /**
   * Style definition for the text input area.
   */
  textArea: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns content along the main axis to the center.
       * Aligns content along the cross axis to the center.
       * Sets the width of the text input area.
       * Sets the height of the text input area.
       * Provides padding inside the text input area.
       * Defines the gap between child elements.
       * Specifies a flexible size for the text input area.
       * Adds rounded corners to the text input area.
       * Sets the background color of the text input area.
       */
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "auto",
      padding: "0px 20px",
      gap: "10px",
      flex: "1 0 0",
      borderRadius: "15px",
      background: "white",
    },
  },
  /**
   * Style definition for the send button.
   */
  sendButton: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Provides padding inside the send button.
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns content along the main axis to the center.
       * Aligns content along the cross axis to the center.
       * Defines the gap between child elements.
       * Adds rounded corners to the send button.
       * Sets the background color of the send button.
       */
      padding: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      borderRadius: "50%",
      background: "aqua",
    },
  },
  /**
   * Style definition for the image inside the send button.
   */
  sendButtonImage: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns content along the main axis to the center.
       * Aligns content along the cross axis to the center.
       * Sets the width of the image inside the send button.
       * Sets the height of the image inside the send button.
       */
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "25px",
      height: "25px",
    },
  },
};

export default ChatStyles;
