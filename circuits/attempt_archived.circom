pragma circom 2.1.4;

include "./circom-esdsa/circuits/ecdsa.circom";
include "./circom-esdsa/circuits/bigint.circom";
include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/poseidon.circom";

template SignatureVerification() {
    // Public inputs
    signal input hashedPublicKey[2][2];
    // Private inputs
    signal input hashSecretKey;

    signal input signatureR[4];
    signal input signatureS[4];
    signal input publicKey[2][4];

    // Hashing the private inputs
    component hashPublicKey0 = Poseidon(2);
    hashPublicKey0.inputs <== publicKey[0];

    component hashPublicKey1 = Poseidon(2);
    hashPublicKey1.inputs <== publicKey[1];

    // ECDSA verification
    component ecdsaVerify = ECDSAVerifyNoPubkeyCheck(64, 4);
    ecdsaVerify.r <== signatureR;
    ecdsaVerify.s <== signatureS;
    ecdsaVerify.pubkey <== publicKey;

    // Subtraction and checking if hashed private inputs equal to public inputs
    component subPublicKey0 = BigSub(64, 2);
    subPublicKey0.a <== publicKey[0];
    subPublicKey0.b <== [hashPublicKey0.out];

    component isZeroPublicKey0 = IsZero();
    isZeroPublicKey0.in <== subPublicKey0.out[0];

    component subPublicKey1 = BigSub(64, 2);
    subPublicKey1.a <== publicKey[1];
    subPublicKey1.b <== [hashPublicKey1.out];

    component isZeroPublicKey1 = IsZero();
    isZeroPublicKey1.in <== subPublicKey1.out[0];

    // Final result
    signal output verificationResult;
    verificationResult <== isZeroPublicKey0.out && isZeroPublicKey1.out && ecdsaVerify.result;
}

component main { public [ hashedPublicKey ] } = SignatureVerification();