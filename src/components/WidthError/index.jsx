import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import AllStyles from "../../styles/home";

function WidthError() {
    // State to store the current width of the screen
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Function to update the width when the screen size changes
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    // Add event listener to update the width when the screen is resized
    useEffect(() => {
        window.addEventListener("resize", updateScreenWidth);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, []); // Empty dependency array ensures that this effect runs only once after the initial render

    return (
        <>
            <Grid {...AllStyles.widthErrorStyle}>
                <p>
                    Please set the width of the screen to less than 600px or use mobile view using developer tools.
                </p>
                <p>
                    Current width of the screen: {screenWidth} px.
                </p>
            </Grid>
        </>
    );
}

export default WidthError;
