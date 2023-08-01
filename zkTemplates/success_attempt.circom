include "./circom-esdsa/circuits/ecdsa.circom";
component main {public [r, s, msghash, pubkey]} = ECDSAVerifyNoPubkeyCheck(64, 4);