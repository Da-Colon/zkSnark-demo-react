import { useState, useEffect } from 'react';
import * as snarkjs from 'snarkjs';

function useZkSnark(threshold: number, assetCount: number) {
  const [provingKey, setProvingKey] = useState(null);
  const [verificationKey, setVerificationKey] = useState(null);

  useEffect(() => {
    // This should be called whenever `threshold` or `assetCount` changes.
    generateCircuitAndKeys();
  }, [threshold, assetCount]);

  async function generateCircuitAndKeys() {
    // Generate the circuit based on `threshold` and `assetCount`.
    const circuit = `
      template <typename FieldT>
      class AssetSumCircuit : public gadget<FieldT> {
        // Generate the circuit code based on `threshold` and `assetCount`...
      }
    `;

    // Compile the circuit.
    const compiledCircuit = await snarkjs.compile(circuit);

    // Generate the proving and verification keys.
    const { pk, vk } = await snarkjs.setup(compiledCircuit);

    setProvingKey(pk);
    setVerificationKey(vk);

    // TODO: Save `pk` and `vk` in local storage to avoid re-generating them.
  }

  async function generateProof(privateInputs: number[]) {
    // Generate a proof based on the private inputs.
    const proof = await snarkjs.prove(provingKey, privateInputs);

    // TODO: Save `proof` in local storage to avoid re-generating it.

    return proof;
  }

  return {
    provingKey,
    verificationKey,
    generateProof,
  };
}
