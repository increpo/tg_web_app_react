import React, { FC, useState } from "react";
import { RWebShare } from "react-web-share";
import { shareOnMobile } from "react-mobile-share";
import './shareBtn.scss';

const ShareBtn = ( {url} ) => {
  	const imgBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2...";
  	const shareIconUrl = '../images/share_icon.png';

	return (
		<button
	  		className="share-btn"
			  onClick={() =>
			    shareOnMobile(
			      {
			        text: "Hey checkout our package react-mobile-share",
			        url: url,
			        title: "React-Mobile-Share",
			        images: [imgBase64]
			      },
			      (message) => alert(message)
			    )
			  }
		>
			<img src={shareIconUrl} alt="share icon" />
				<span className="share-btn-text">Share</span>
		</button>
	);
}

export default ShareBtn;
