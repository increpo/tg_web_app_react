import { Html5QrcodeScanner } from 'html5-qrcode';
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
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        // if (!(props.qrCodeSuccessCallback)) {
        //     throw "qrCodeSuccessCallback is required callback.";
        // }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        // html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);
        html5QrcodeScanner.render(onCodeSuccessCallback, onCodeErrorCallback);

	    const onCodeSuccessCallback = (decodedText, decodedResult) => {
	    	// handle decoded results here
	    	html5QrcodeScanner.clear()
	        setScanResult(decodedText);
	        // tg.sendData(decodedText);
	        // console.log(decodedText);
	    };

	    const onCodeErrorCallback = (e) => {
	        console.log(e);
	    };
        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
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

