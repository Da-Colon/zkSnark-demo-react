pragma circom 2.0.2;

include "./circom-esdsa/circuits/ecdsa.circom";
include "./circom-esdsa/circuits/zk-identity/eth.circom";
include "../node_modules/circomlib/circuits/poseidon.circom";

template SignatureVerification() {
    // Public inputs
    signal input commitment[2];

    // Private inputs
    signal input nonce[2];
    signal input signatureR[4];
    signal input signatureS[4];
    signal input publicKey[2][4];
    signal input msghash[4];

    // Compute the commitment by hashing the public key and nonce together
    component hashPublicKeyNonce = Poseidon(4);
    hashPublicKeyNonce.inputs[0] <== publicKey[0][0];
    hashPublicKeyNonce.inputs[1] <== publicKey[0][1];
    hashPublicKeyNonce.inputs[2] <== nonce[0];
    hashPublicKeyNonce.inputs[3] <== nonce[1];
    
    // Verify the commitment
    component isZeroCommitment0 = IsZero();
    isZeroCommitment0.in <== commitment[0] - hashPublicKeyNonce.out;

    component isZeroCommitment1 = IsZero();
    isZeroCommitment1.in <== commitment[1] - hashPublicKeyNonce.out;

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
