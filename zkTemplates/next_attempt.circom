pragma circom 2.0.2;

include "./circom-esdsa/circuits/ecdsa.circom";
include "./circom-esdsa/circuits/zk-identity/eth.circom";

template SignatureVerification(n, k) {
    // public inputs

    // Private inputs
    signal input msghash[k];
    signal input signatureR[k];
    signal input signatureS[k];
    signal input publicKey[2][k]; // Public key is a 2-element array of 4 64-bit chunks (256 bits each)
    
    // Verify the signature is valid
    component ecdsaVerify = ECDSAVerifyNoPubkeyCheck(n, k);
    ecdsaVerify.r <== signatureR;
    ecdsaVerify.s <== signatureS;
    ecdsaVerify.pubkey <== publicKey;
    ecdsaVerify.msghash <== msghash;

    component flatpubkey = FlattenPubkey(n, k);
    flatpubkey.pubkey <== publicKey;

    component genAddr = PubkeyToAddress(n, k);
    addrss.pubkey <== flatpubkey.flatpubkey;

    // Verify the address is correct
    component identity = Identity(n, k);
    identity.identity <== genAddr.identity;
    // Final result
    signal output verificationResult;
    verificationResult <== ecdsaVerify.result;
}

component main { public [ msghash ] } = SignatureVerification(64, 4);
