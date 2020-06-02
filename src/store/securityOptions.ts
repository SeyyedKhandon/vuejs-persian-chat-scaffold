import simpleBrowserFingerprint from "simple-browser-fingerprint";

const securityOptions = {
  encodingType: undefined,
  encryptionSecret: undefined,
  isCompression: undefined
};

if (process.env.NODE_ENV === "production")
  Object.assign(securityOptions, {
    encodingType: "aes",
    encryptionSecret: simpleBrowserFingerprint(),
    isCompression: true
  });
export default securityOptions;
