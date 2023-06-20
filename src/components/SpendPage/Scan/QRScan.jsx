import { Html5Qrcode, Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import {useTelegram} from '../../../hooks/useTelegram.jsx';

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

const QRScanner = (props) => {

    const [scanResult, setScanResult] = useState(null);
    const {tg} = useTelegram();

    useEffect(() => {
        // when component mounts
        const settings = {
            rememberLastUsedCamera: true,
            // Only support camera scan type.
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
            fps: 10,
            qrbox: 250,
            disableFlip: false,
        }
        const config = createConfig({...props, ...settings});
        const verbose = props.verbose === true;

        const html5QrCode = new Html5Qrcode(/* element id */ qrcodeRegionId, verbose);

        html5QrCode.start(
            {
                facingMode: "environment",
            },
            config,
            (decodedText, decodedResult) => {
                // do something when code is read 
                html5QrCode.stop().then((ignore) => {
                    // QR Code scanning is stopped.
                    setScanResult(decodedText);
                    tg.sendData(JSON.stringify({text: decodedText, result: decodedResult}));
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


        // cleanup function when component will unmount
        return () => {

        };
    }, []);

    return (
      <div className={props.className}>
          <div id={qrcodeRegionId} />
            { scanResult
                ? <div><a href={scanResult}>Click me</a>{scanResult}</div>
                : <div id="qr_scanner_render"></div>
            }
      </div>
    );
};

export default QRScanner;
