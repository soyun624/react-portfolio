import React from 'react';
import Particles from "react-particles-js";

const particles = () => {
    return (
        <div
            style={{
            width: "100%",
            height: "100%",
            }}
        >
            <Particles 
                height={window.outerHeight}
                params={{
                    particles: {
                    number: {
                        value: 50,
                        density: {
                        enable: true,
                        value_area: 900
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                        width:6,
                        color: "#ABEA37"
                        }
                    }
                    }
                }}
                />
        </div>
    )
}

export default particles
