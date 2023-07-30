pragma circom 2.0.2;

include "./circom-esdsa/circuits/ecdsa.circom";

template SignatureVerification() {
    // public inputs
    signal input msghash[4];  // message hash is a 256-bit hash, so it needs 8 32-bit chunks

    // Private inputs
    signal input signatureR[4];
    signal input signatureS[4];
    signal input publicKey[2][4]; // Public key is a 2-element array of 4 64-bit chunks (256 bits each)

    // Verify the signature is valid
    component ecdsaVerify = ECDSAVerifyNoPubkeyCheck(64, 4);
    ecdsaVerify.r <== signatureR;
    ecdsaVerify.s <== signatureS;
    ecdsaVerify.pubkey <== publicKey;
    ecdsaVerify.msghash <== msghash;

    // Final result
    signal output verificationResult;
    verificationResult <== ecdsaVerify.result;
}

component main { public [ msghash ] } = SignatureVerification();
