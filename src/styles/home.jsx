
/**
 * Object defining styles for chat components.
 */
const AllStyles = {
  /**
   * Style definition for the navigation bar.
   */
  navigationBar: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Provides padding inside the navigation bar.
       * Aligns items along the main axis to space between.
       * Aligns items along the cross axis to the center.
       * Sets the background color of the navigation bar.
       * Sets the position of the navigation bar to sticky.
       * Setting the navigation bar at top = 0.
       * Sets the width of the navigation bar.
       * Sets the stacking order of the navigation bar.
       */
      display: "flex",
      flexDirection: "row",
      padding: "15px",
      justifyContent: "space-between",
      alignItems: "center",
      background: "white",
      position: "sticky",
      top: "0",
      width: "100%",
      zIndex: 100,
    },
  },
  /**
   * Style definition for the right side of the navigation bar.
   */
  navigationRight: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns items along the main axis to space between.
       * Sets the width of the right side of the navigation bar.
       */
      display: "flex",
      justifyContent: "space-between",
      width: "auto",
    },
  },
  /**
   * Style definition for the left side of the navigation bar.
   */
  navigationLeft: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns items along the main axis to space between.
       * Sets the width of the left side of the navigation bar.
       */
      display: "flex",
      justifyContent: "space-between",
      width: "80%",
    },
  },
  /**
   * Style definition for the navigation name.
   */
  navigationName: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the width of the navigation name.
       * Sets the color of the navigation name.
       * Specifies the font family for the navigation name.
       * Sets the font size of the navigation name.
       * Specifies the font style for the navigation name.
       * Sets the font weight of the navigation name.
       * Aligns text to the left.
       */
      width: "80%",
      color: "black",
      fontFamily: "Arial",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      textAlign: "left",
    },
  },
  /**
   * Style definition for the body of the home page.
   */
  homeBody: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with columns, arranging child elements vertically.
       * Aligns items along the main axis to the center.
       * Aligns items along the cross axis to the center.
       * Sets the width of the home body.
       * Provides padding to the home body.
       */
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: "20px",
    },
  },
  /**
   * Style definition for greetings.
   */
  greetings: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Sets the color of the greetings text.
       * Specifies the font family for the greetings text.
       * Sets the font size of the greetings text.
       * Specifies the font style for the greetings text.
       * Sets the font weight of the greetings text.
       * Sets margin around the greetings text.
       */
      display: "flex",
      color: "black",
      fontFamily: "Arial",
      fontSize: "25px",
      fontStyle: "normal",
      fontWeight: 700,
      margin: "20px",
    },
  },
  /**
   * Style definition for a message.
   */
  message: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the color of the message text.
       * Aligns text to the center.
       * Specifies the font family for the message text.
       * Sets the font size of the message text.
       * Specifies the font style for the message text.
       * Sets the font weight of the message text.
       * Sets margin around the message text.
       */
      color: "black",
      textAlign: "center",
      fontFamily: "Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      margin: "20px",
    },
  },
  /**
   * Style definition for the start chat button.
   */
  startChatButton: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Provides padding inside the start chat button.
       * Adds rounded corners to the start chat button.
       * Sets the background color of the start chat button.
       * Adds a box shadow to the start chat button.
       * Sets the height of the start chat button.
       * Adds hover effect to the start chat button.
       */
      display: "flex",
      padding: "20px",
      borderRadius: "100px",
      background: "darkblue",
      height: "50%",
      textTransform: "capitalize",
      ":hover": {
        textDecoration: "none",
        background: "darkblue",
      },
    },
  },
  /**
   * Style definition for the text of the start chat button.
   */
  startChatButtonText: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the width of the start chat button text.
       * Sets the color of the start chat button text.
       * Specifies the font family for the start chat button text.
       * Sets the font size of the start chat button text.
       * Sets the font weight of the start chat button text.
       */
      width: "100%",
      color: "white",
      fontFamily: "Arial",
      background: "darkblue",
      fontSize: "16px",
      fontWeight: 700,
    },
  },
  /**
   * Style definition for chats title chats.
   */
  ChatsTitleText: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the color of the ended chats text.
       * Specifies the font family for the ended chats text.
       * Sets the font size of the ended chats text.
       * Specifies the font style for the ended chats text.
       * Sets the font weight of the ended chats text.
       * Aligns text to the left.
       */
      color: "black",
      fontFamily: "Arial",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "120%",
      textAlign: "left",
    },
  },
  /**
   * Style definition for the title of chats section.
   */
  ChatsTitle: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns items along the main axis to space between.
       * Provides padding above and below the title of ended chats.
       */
      display: "flex",
      justifyContent: "space-between",
      padding: "25px",
    },
  },
  /**
   * Style definition for the grid of the start another chat button.
   */
  startAnotherChatButtonGrid: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with columns, arranging child elements vertically.
       * Provides padding inside the start another chat button grid.
       * Aligns items along the main axis to the center.
       * Aligns items along the cross axis to the center.
       * Sets the background color of the start another chat button grid.
       */
      display: "flex",
      padding: "25px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
    },
  },
  /**
   * Style definition for the options menu.
   */
  optionsMenu: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with columns, arranging child elements vertically.
       * Provides padding for the option menu.
       * Aligns items along the main axis to the end.
       * Sets the gap between child elements.
       * Sets the width of the options menu.
       */
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      alignItems: "flex-end",
      gap: "16px",
      width: "100%",
    },
  },
  /**
   * Style definition for an item in the options menu.
   */
  optionsMenuItem: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Provides padding for the options menu item.
       * Sets the color of the options menu item.
       * Specifies the font family for the options menu item.
       * Sets the font size of the options menu item.
       * Specifies the font style for the options menu item.
       * Sets the font weight of the options menu item.
       */
      padding: "20px",
      color: "black",
      fontFamily: "Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
    },
  },
  /**
   * Style definition for the links.
   */
  seeAllLink: {
    /**
     * Inline style object.
     */
    style: {
      /*
       * Sets the color of the links.
       * Provides padding for the links.
       * Specifies the font family for the links.
       * Sets the font size of the links.
       * Specifies the font style for the links.
       * Sets the font weight of the links.
       * Sets the text decoration of the links.
       */
      color: "blue",
      textAlign: "right",
      fontFamily: "Arial",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      textDecoration: "none",
    },
  },
  /**
   * Style definition for the WidthError Component style.
   */
  widthErrorStyle: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Provides padding for the widthErrorStyle component.
       * Sets the height for the widthErrorStyle component.
       * Specifies the font family for the widthErrorStyle component.
       * Sets the font size of the widthErrorStyle component.
       */
      padding: "15px",
      height: "100vh",
      fontFamily: "Arial",
      fontSize: "16px",
    },
  }
};

export default AllStyles;
