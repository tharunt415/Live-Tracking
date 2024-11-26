// export default class ToggleInitializer {
//     constructor(toggleContainer) {
//         // Accepts either a selector or a DOM element
//         this.toggleContainer = typeof toggleContainer === 'string' 
//             ? document.querySelector(toggleContainer) 
//             : toggleContainer;
        
//         this.toggles = this.getToggles(); // Fetch the toggle data
//         this.init(); // Initialize the toggle rendering
//     }

//     // Get the toggle data
//     getToggles() {
//         return [
//             {
//                 label: 'GPS Location',
//                 imgSrc: 'Frontend/assets/location.png',
//                 imgWidth: '15px',
//                 backgroundColor: '#a0f4ed6d',
//                 checked: true
//             },
//             {
//                 label: 'Google Location',
//                 imgSrc: 'Frontend/assets/google.png',
//                 imgWidth: '15px',
//                 backgroundColor: '#108bff34',
//                 eyeIcon: 'Frontend/assets/path.png',
//                 eyeIconWidth: '20px'
//             },
//             {
//                 label: 'Overspeed Path',
//                 imgSrc: 'Frontend/assets/speed.png',
//                 imgWidth: '12px',
//                 backgroundColor: '#ff32cc20',
//                 checked: false
//             },
//             {
//                 label: 'Regular Path',
//                 imgSrc: 'Frontend/assets/maps.png',
//                 imgWidth: '15px',
//                 backgroundColor: '#84bbff2b',
//                 checked: false
//             }
//         ];
//     }

//     // Initialize the rendering of toggles
//     init() {
//         document.addEventListener('DOMContentLoaded', () => {
//             this.renderToggles();
//         });
//     }

//     // Render the toggles
//     renderToggles() {
//         const toggleContainer = this.toggleContainer;
//         if (!toggleContainer) return; // Ensure the toggle container exists

//         this.toggles.forEach(toggle => {
//             const div = document.createElement('div');
//             div.className = 'toggle-s';
//             div.style.backgroundColor = toggle.backgroundColor;

//             const span = document.createElement('span');
//             const img = document.createElement('img');
//             img.src = toggle.imgSrc;
//             img.width = parseInt(toggle.imgWidth);
//             span.appendChild(img);
//             span.appendChild(document.createTextNode(toggle.label));
//             div.appendChild(span);

//             const label = document.createElement('label');
//             label.className = 'switch';

//             if (toggle.eyeIcon) {
//                 const eyeImg = document.createElement('img');
//                 eyeImg.className = 'img-ey';
//                 eyeImg.style.margin = '0px';
//                 eyeImg.style.width = toggle.eyeIconWidth;
//                 eyeImg.style.paddingLeft = '9px';
//                 eyeImg.src = toggle.eyeIcon;
//                 label.appendChild(eyeImg);
//             } else {
//                 const input = document.createElement('input');
//                 input.type = 'checkbox';
//                 input.checked = toggle.checked;
//                 label.appendChild(input);

//                 const slider = document.createElement('span');
//                 slider.className = 'slider';
//                 label.appendChild(slider);
//             }

//             div.appendChild(label);
//             toggleContainer.appendChild(div);
//         });

//         this.addRideLogsButton(toggleContainer);
//     }

//     // Add the Ride Logs button
//     addRideLogsButton(toggleContainer) {
//         const button = document.createElement('button');
//         button.className = 'ride-logs-button';
//         button.style.marginTop = '10px';
//         button.style.marginBottom = '10px';
//         button.textContent = 'Ride Logs';

//         const arrowSpan = document.createElement('span');
//         arrowSpan.className = 'arrow';
//         const arrowImg = document.createElement('img');
//         arrowImg.src = 'Frontend/assets/arrow.png';
//         arrowImg.width = 8;
//         arrowSpan.appendChild(arrowImg);
//         button.appendChild(arrowSpan);

//         toggleContainer.parentNode.appendChild(button);
//     }
// }
import location from "../../assets/location.png"
import google from "../../assets/google.png"
import speed from "../../assets/speed.png"
import path from "../..//assets/path.png"
import eye from "../../assets/eye.png"
import  arrow from "../../assets/arrow.png"

export default class ToggleInitializer {
    constructor(dashboardContainer) {
        this.dashboardContainer = dashboardContainer; 
        this.toggles = this.getToggles(); 
        this.initializeToggles();
    }

    getToggles() {
        return [
            {
                label: 'GPS Location',
                imgSrc: `<img src=${location}>`,
                imgWidth: '15px',
                backgroundColor: '#a0f4ed6d',
                checked: true
            },
            {
                label: 'Google Location',
                imgSrc: `<img src=${google}>`,
                imgWidth: '15px',
                backgroundColor: '#108bff34',
                eyeIcon: `<img src=${eye}>`,
                eyeIconWidth: '20px'
            },
            {
                label: 'Overspeed Path',
                imgSrc: `<img src=${speed}>`,
                imgWidth: '12px',
                backgroundColor: '#ff32cc20',
                checked: false
            },
            {
                label: 'Regular Path',
                imgSrc: `<img src=${path}>`,
                imgWidth: '15px',
                backgroundColor: '#84bbff2b',
                checked: false
            }
        ];
    }

    // Method to initialize toggles
    initializeToggles() {
        const toggleContainer = document.createElement('div');
        toggleContainer.id = 'toggleContainer';
        this.dashboardContainer.appendChild(toggleContainer);

        this.renderToggles(toggleContainer);
    }

    // Render the toggles
    renderToggles(toggleContainer) {
        if (!toggleContainer) {
            console.error("Toggle container does not exist.");
            return; 
        }

        console.log("Rendering toggles:", this.toggles);

        this.toggles.forEach(toggle => {
            const div = document.createElement('div');
            div.className = 'toggle-s';
            div.style.backgroundColor = toggle.backgroundColor;

            const span = document.createElement('span');
            const img = document.createElement('img');
            img.src = toggle.imgSrc;
            img.width = parseInt(toggle.imgWidth);
            span.appendChild(img);
            span.appendChild(document.createTextNode(toggle.label));
            div.appendChild(span);

            const label = document.createElement('label');
            label.className = 'switch';

            if (toggle.eyeIcon) {
                const eyeImg = document.createElement('img');
                eyeImg.className = 'img-ey';
                eyeImg.style.margin = '0px';
                eyeImg.style.width = toggle.eyeIconWidth;
                eyeImg.style.paddingLeft = '9px';
                eyeImg.src = toggle.eyeIcon;
                label.appendChild(eyeImg);
            } else {
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.checked = toggle.checked;
                label.appendChild(input);

                const slider = document.createElement('span');
                slider.className = 'slider';
                label.appendChild(slider);
            }

            div.appendChild(label);
            toggleContainer.appendChild(div);
        });

        this.addRideLogsButton(toggleContainer);
    }

    // Add the Ride Logs button
    addRideLogsButton(toggleContainer) {
        const button = document.createElement('button');
        button.className = 'ride-logs-button';
        button.style.marginTop = '10px';
        button.style.marginBottom = '10px';
        button.textContent = 'Ride Logs';

        const arrowSpan = document.createElement('span');
        arrowSpan.className = 'arrow';
        const arrowImg = document.createElement('img');
        arrowImg.src = `<img src=${arrow}>`;
        arrowImg.width = 8;
        arrowSpan.appendChild(arrowImg);
        button.appendChild(arrowSpan);

        toggleContainer.parentNode.appendChild(button);
    }
}
