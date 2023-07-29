pragma circom 2.0.2;

include "./circom-esdsa/circuits/ecdsa.circom";
include "./circom-esdsa/circuits/zk-identity/eth.circom";
include "../node_modules/circomlib/circuits/sha256/sha256.circom";
include "../node_modules/circomlib/circuits/mux1.circom";

template SignatureVerification() {
    // Public inputs
    signal input commitment[2];

    // Private inputs
    signal input nonce[2];
    signal input signatureR[4];
    signal input signatureS[4];
    signal input publicKey[2];
    signal input msghash[4];

    // Prepare inputs for SHA256 hashing
    signal input sha256Input[512];
    
    component mux = Mux1(512);
    for (var i = 0; i < 256; i++) {
        mux.sel[i] <== i < 256 ? 0 : 1;
        mux.ins[0][i] <== publicKey[i];
        mux.ins[1][i] <== nonce[i];
        sha256Input[i] <== mux.out[i];
    }

    // Compute the commitment by hashing the public key and nonce together
    component hashPublicKeyNonce = Sha256(512);
    hashPublicKeyNonce.in <== sha256Input;
    
    // Verify the commitment
    component isZeroCommitment0 = IsZero();
    isZeroCommitment0.in <== commitment[0] - hashPublicKeyNonce.out[0];

    component isZeroCommitment1 = IsZero();
    isZeroCommitment1.in <== commitment[1] - hashPublicKeyNonce.out[1];

    // Verify the signature is valid
    component ecdsaVerify = ECDSAVerifyNoPubkeyCheck(64, 4);
    ecdsaVerify.r <== signatureR;
    ecdsaVerify.s <== signatureS;
    ecdsaVerify.pubkey <== publicKey;
    ecdsaVerify.msghash <== msghash;

    // Final result
    signal output verificationResult;
    signal temp;
    temp <== isZeroCommitment0.out * isZeroCommitment1.out;
    verificationResult <== temp * ecdsaVerify.result;
}

component main { public [ commitment ] } = SignatureVerification();
