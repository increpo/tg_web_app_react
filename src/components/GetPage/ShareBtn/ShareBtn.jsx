import './ShareBtn.scss';
 //пользователь 18 или 20
import {
  FacebookShareButton,
  // GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  // PinterestShareButton,
  VKShareButton,
  // OKShareButton,
  // RedditShareButton,
  // TumblrShareButton,
  // LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  // WorkplaceShareButton,
  // EmailShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  // GooglePlusIcon,
  LinkedinIcon,
  // PinterestIcon,
  VKIcon,
  // OKIcon,
  // RedditIcon,
  // TumblrIcon,
  // LivejournalIcon,
  MailruIcon,
  ViberIcon,
  // WorkplaceIcon,
  // EmailIcon,
} from 'react-share';


import React, { useState, createElement } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const shareUrl = 'https://makeshop.pro';

const ShareBtn = ({shareLink, className}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const socialBtns = ['Facebook', 'Telegram', 'Twitter', 'Whatsapp'];

  return (
    <div>
      <button className={className} onClick={onOpenModal}>Open modal</button>
      <Modal
      	open={open}							//boolean		Control if the modal is open or not.
      	onClose={onCloseModal}				
      	closeOnEsc={true}					//boolean	true	Is the modal closable when user press esc key.
      	closeOnOverlayClick={true}			//boolean	true	Is the modal closable when user click on overlay.
      	center={true}						//boolean	false	Should the dialog be centered.
      	closeIcon={''}						
      	blockScroll={true}					//boolean	true	Whether to block scrolling when dialog is open.
      	showCloseIcon={false}				//boolean	true	Show the close icon.
      	closeIconId={'social_modal_close'}	//string		id attribute for the close icon button.
      	//closeIcon							//React.ReactNode		Custom icon to render (svg, img, etc...).
      	//focusTrapped={true}				//boolean	true	When the modal is open, trap focus within it.
      	//initialFocusRef					//React.RefElement<HTMLElement> - Sets focus on this specific element when modal opens if focus trap is used.
      	//container							//Element		You can specify a container prop which should be of type Element. The portal will be rendered inside that element. The default behavior will create a div node and render it at the at the end of document.body.
      	//classNames						//An object containing classNames to style the modal.{ root?: string; overlay?: string; overlayAnimationIn?: string; overlayAnimationOut?: string; modal?: string; modalAnimationIn?: string; modalAnimationOut?: string; closeButton?: string; closeIcon?: string; }
      	//styles							//An object containing the styles objects to style the modal. { root?: React.CSSProperties; overlay?: React.CSSProperties; overlay?: React.CSSProperties; modalContainer?: React.CSSProperties; modal?: React.CSSProperties; closeButton?: React.CSSProperties; closeIcon?: React.CSSProperties; }
      	//animationDuration={300}			//Animation duration in milliseconds.
      	//role={"dialog"}					//ARIA role for modal
      	//RefElement						//React.RefElement<HTMLDivElement>	undefined	Ref for modal dialog element
      	//ariaLabelledby					//string		ARIA label for modal
      	//ariaDescribedby					//string		ARIA description for modal
      	//modalId							//string		id attribute for modal
      	>
	 		<div className="social-buttons">
	 			<div>
	 				<p>Facebook</p>
		 			<FacebookShareButton
		 				url={shareUrl}
		 		        quote={'Dummy text!'}
		         		hashtag="#muo"
		 			>
		 				
		 				<FacebookIcon size={40} round />
		 			</FacebookShareButton>	 				
	 			</div>
	 			<div>
	 				<p>Telegram</p>
		 			<TelegramShareButton
		 				url={shareUrl}
		 		        quote={'Dummy text!'}
		         		hashtag="#muo"
		 			>
		 				
		 				<TelegramIcon size={40} round />
		 			</TelegramShareButton>	 				
	 			</div>
	 			<div>
	 				<p>Twitter</p>
		 			<TwitterShareButton
		 				url={shareUrl}
		 		        quote={'Dummy text!'}
		         		hashtag="#muo"
		 			>
		 				
		 				<TwitterIcon size={40} round />
		 			</TwitterShareButton>	 				
	 			</div>
	 			<div>
	 				<p>Whatsapp</p>
		 			<WhatsappShareButton
		 				url={shareUrl}
		 		        quote={'Dummy text!'}
		         		hashtag="#muo"
		 			>
		 				
		 				<WhatsappIcon size={40} round />
		 			</WhatsappShareButton>	 				
	 			</div>
	 			<div>
	 				<p>Viber</p>
		 			<ViberShareButton
		 				url={shareUrl}
		 		        quote={'Dummy text!'}
		         		hashtag="#muo"
		 			>
		 				
		 				<ViberIcon size={40} round />
		 			</ViberShareButton>	 				
	 			</div>
	 			<div>
	 				<p>VK</p>
		 			<VKShareButton
		 				url={shareUrl}
		 		        quote={'Dummy text!'}
		         		hashtag="#muo"
		 			>
		 				
		 				<VKIcon size={40} round />
		 			</VKShareButton>	 				
	 			</div>
	 			<div>
	 				<p>Linkedin</p>
		 			<LinkedinShareButton
		 				url={shareUrl}
		 		        quote={'Dummy text!'}
		         		hashtag="#muo"
		 			>
		 				
		 				<LinkedinIcon size={40} round />
		 			</LinkedinShareButton>	 				
	 			</div>
	 			<div>
	 				<p>Mailru</p>
		 			<MailruShareButton
		 				url={shareUrl}
		 		        quote={'Dummy text!'}
		         		hashtag="#muo"
		 			>
		 				
		 				<MailruIcon size={40} round />
		 			</MailruShareButton>	 				
	 			</div>
	 		</div>
      </Modal>
    </div>
  );
};

export default ShareBtn;


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

// import React from "react";
// import ShareOnSocial from "react-share-on-social";
// //import ShareOnSocial from "./ShareOnSocial/ShareOnSocial.tsx";

// const ShareBtn = ({shareLink, className}) => {

//   	return (
// 	    <ShareOnSocial
// 	      	// textToShare="Check out this new wardrobe I just found from IKEA!" //The text that appears in the post.
// 	      	link={shareLink}
// 	      	// linkTitle="Share your link" 				//The link title which should correspond to the <title> tag.
// 	      	// linkMetaDesc="Let share" 				//The meta description of the link, should correspond to the <meta og:description> tag.
// 	      	// linkFavicon={'Share'}					//A small image which is shown in the header of th popup fallback.
// 	      	noReferer									//If the social media buttons should have a noreferrer tag or not.
// 	      	//backdropColor=rgba(0,0,0,0.4)				//The background color of the backdrop.
// 	      	//closeText='Close' 						//The label of the close button.
// 	      	//copyToClipboardText='Copy to clipboard' 	//The label of the copy to clipboard button.
// 	      	//copySuccessText='Copied'					//The label of the copy to clipboard button after a successful copy.
// 	      	//onSocialClick={() => null}				//A callback invoked when user clicks on any of the social media buttons in the fallback.
// 	    >
// 	      	<button className={className}>
// 	      		<span className={'share-btn-text'}>
// 	      			Share
// 	      		</span>
// 	  		</button>
// 	    </ShareOnSocial>
// 	);
// };

// export default ShareBtn;

// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';


// const ShareBtn = ({shareLink, className}) => (
//   	<Popup trigger={
//   		<button className={className}>Share</button>
//   	} position="right center">
//     	<div>
// 	 		<div className="share-btn-text">
// 	 			facebook
// 	 			<FacebookShareButton
// 	 				url={shareUrl}
// 	 		        quote={'Dummy text!'}
// 	         		hashtag="#muo"
// 	 			>
// 	 				<FacebookIcon size={40} round />
// 	 			</FacebookShareButton>
// 	 		</div>
//     	</div>
//   	</Popup>
// );