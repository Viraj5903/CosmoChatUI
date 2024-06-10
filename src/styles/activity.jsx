/**
 * Object defining styles for activity components.
 */
const ActivityStyles = {
  /**
   * Style definition for the body of an activity.
   */
  activityBody: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Sets the width of the activity body.
       * Provides padding inside the activity body.
       * Flexbox layout with columns, arranging child elements vertically.
       */
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  /**
   * Style definition for the outline of a title.
   */
  titleOutline: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Provides padding on all the sides.
       */
      padding: "15px",
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
       * Font family for the title text.
       * Sets the font size of the title text.
       * Sets the font weight of the title text.
       * Aligns text to the left.
       */
      fontFamily: "Arial",
      fontSize: "20px",
      fontWeight: 1000,
      textAlign: "left",
    },
  },
  /**
   * Style definition for the description text.
   */
  description: {
    /*
     * Inline style object.
     */
    sx: {
      /*
       * Font family for the description text.
       * Sets the font size of the description text.
       * Sets the font weight of the description text.
       * Aligns text to the left.
       * Provides padding on all the sides.
       */
      fontFamily: "Arial",
      fontSize: "16px",
      fontWeight: 700,
      textAlign: "left",
      padding: "15px",
    },
  },
};

export default ActivityStyles;
