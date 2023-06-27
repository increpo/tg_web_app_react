import './ShareBtn.scss';
 //пользователь 18 или 20
// import {
//   FacebookShareButton,
//   GooglePlusShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   TelegramShareButton,
//   WhatsappShareButton,
//   PinterestShareButton,
//   VKShareButton,
//   OKShareButton,
//   RedditShareButton,
//   TumblrShareButton,
//   LivejournalShareButton,
//   MailruShareButton,
//   ViberShareButton,
//   WorkplaceShareButton,
//   EmailShareButton,
// } from 'react-share';

// import {
//   FacebookIcon,
//   TwitterIcon,
//   TelegramIcon,
//   WhatsappIcon,
//   GooglePlusIcon,
//   LinkedinIcon,
//   PinterestIcon,
//   VKIcon,
//   OKIcon,
//   RedditIcon,
//   TumblrIcon,
//   LivejournalIcon,
//   MailruIcon,
//   ViberIcon,
//   WorkplaceIcon,
//   EmailIcon,
// } from 'react-share';


// const ShareBtn = () => {
// 	const shareUrl = 'https://makeshop.pro';
// 	return (
// 		<div className="share-btn-text">
// 			facebook
// 			<FacebookShareButton
// 				url={shareUrl}
// 		        quote={'Dummy text!'}
//         		hashtag="#muo"
// 			>
// 				<FacebookIcon size={40} round />
// 			</FacebookShareButton>
// 		</div>
// 	)
// }

// export default ShareBtn;

import React from "react";
import ShareOnSocial from "react-share-on-social";

const ShareBtn = ({shareLink}) => {

  	return (
	    <ShareOnSocial
	      	// textToShare="Check out this new wardrobe I just found from IKEA!" //The text that appears in the post.
	      	link={shareLink}
	      	// linkTitle="Share your link" 				//The link title which should correspond to the <title> tag.
	      	// linkMetaDesc="Let share" 				//The meta description of the link, should correspond to the <meta og:description> tag.
	      	// linkFavicon={'Share'}					//A small image which is shown in the header of th popup fallback.
	      	noReferer									//If the social media buttons should have a noreferrer tag or not.
	      	//backdropColor=rgba(0,0,0,0.4)				//The background color of the backdrop.
	      	//closeText='Close' 						//The label of the close button.
	      	//copyToClipboardText='Copy to clipboard' 	//The label of the copy to clipboard button.
	      	//copySuccessText='Copied'					//The label of the copy to clipboard button after a successful copy.
	      	//onSocialClick={() => null}				//A callback invoked when user clicks on any of the social media buttons in the fallback.
	    >
	      	<button className={'share-btn'}>
	      		<span className={'share-btn-text'}>
	      			Share
	      		</span>
	  		</button>
	    </ShareOnSocial>
	);
};

export default ShareBtn;