import './ShareBtn.scss';

import React from "react";
import { shareOnMobile } from "react-mobile-share";

const imgBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2...";

const App = () => {
  return (
    <div>
      <button
        onClick={() =>
          shareOnMobile({
            text: "Hey checkout our package react-mobile-share",
            url: "https://www.npmjs.com/package/react-mobile-share",
            title: "React-Mobile-Share",
            images: [imgBase64],
          })
        }
      >
        Share
      </button>
    </div>
  );
};

export default App;