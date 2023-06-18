import { Html5Qrcode, Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';
import { useEffect, useState } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    let config = {};
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};

//const Html5QrcodePlugin = (props) => {
const QRScanner = (props) => {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        // when component mounts
      	const settings = {
      		rememberLastUsedCamera: true,
      		// Only support camera scan type.
        	supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
        	facingMode: "environment",
        	videoConstraints: {
        		width: { min: 1280 },
    			height: { min: 720 }
			},
			//aspectRatio: 1.777778,
			//disableFlip: true,
    	}
        const config = createConfig({...props, ...settings});
        const verbose = props.verbose === true;
        // Suceess callback is required.
        // if (!(props.qrCodeSuccessCallback)) {
        //     throw "qrCodeSuccessCallback is required callback.";
        // }
        //const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        // html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

	    const onCodeSuccessCallback = (decodedText, decodedResult) => {
	    //const onCodeSuccessCallback = (result) => {
	    	// handle decoded results here
	    	html5QrcodeScanner.clear();
	        setScanResult(decodedText);
	        //setScanResult(JSON.stringify(result));
	        // tg.sendData(decodedText);
	        // console.log(decodedText);
	    };

	    const onCodeErrorCallback = (e) => {
	        console.log(e);
	    };


        //html5QrcodeScanner.render(onCodeSuccessCallback, onCodeErrorCallback);

	    const html5QrCode = new Html5Qrcode(/* element id */ qrcodeRegionId, verbose);

		Html5Qrcode.getCameras().then(devices => {
		  /**
		   * devices would be an array of objects of type:
		   * { id: "id", label: "label" }
		   */
		  	if (devices && devices.length) {
		    	var cameraId = devices[devices.length - 1].id;
		    	// .. use this to start scanning.
				html5QrCode.start(
			  		cameraId, 
					// {
					//   fps: 10,    // Optional, frame per seconds for qr code scanning
					//   qrbox: { width: 250, height: 250 }  // Optional, if you want bounded box UI
					// },
			  		config,
			  		(decodedText, decodedResult) => {
			  			// do something when code is read 
			  			html5QrCode.stop().then((ignore) => {
			  			// QR Code scanning is stopped.
			  			setScanResult(decodedText);
					}).catch((err) => {
				  		// Stop failed, handle it.
					});
			  	},
			  	(errorMessage) => {
			    	// parse error, ignore it.
			  	})
				.catch((err) => {
			  		// Start failed, handle it.
				});
		  	}
		}).catch(err => {
		  	// handle err
		});

		// html5QrCode.start(
		// 	{
		// 		facingMode: "environment",
		// 		//facingMode: { exact: "environment" },
		// 		// width: { ideal: 1280 },
    	// 		// height: { ideal: 720 },
		// 	},
		//   	config,
		//   	(decodedText, decodedResult) => {
		// 	  	// do something when code is read 
		//   		html5QrCode.stop().then((ignore) => {
		// 			// QR Code scanning is stopped.
		// 	  		setScanResult(decodedText);
		// 		}).catch((err) => {
		// 			// Stop failed, handle it.
		// 		});
		//   	},
		//   	(errorMessage) => {
		//     	// parse error, ignore it.
		//   	})
		// .catch((err) => {
		//   	// Start failed, handle it.
		// });

        // cleanup function when component will unmount
        return () => {
            // html5QrcodeScanner.clear().catch(error => {
            //     console.error("Failed to clear html5QrcodeScanner. ", error);
            // });
            // html5QrCode.stop().then((ignore) => {
			//   // QR Code scanning is stopped.
			// }).catch((err) => {
			//   // Stop failed, handle it.
			// });
        };
    }, []);

    return (
    	<div>
        	<div id={qrcodeRegionId} />
            { scanResult
                ? <div><a href={scanResult}>Click me</a>{scanResult}</div>
                : <div id="qr_scanner_render"></div>
            }
    	</div>
    );
};

//export default Html5QrcodePlugin;
export default QRScanner;

