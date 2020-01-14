'use strict';

// External Modules
import { createHash } from 'crypto';

// Types
import { HexBase64Latin1Encoding as DigestEncoding } from 'crypto';

/** Generates hash for value according to encoding. */
export function generateHash({value, algorithm, encoding}: {value: string, algorithm: 'sha1' | 'sha256', encoding: DigestEncoding})
{
    const hasher = createHash(algorithm);
    hasher.update(value);
    const hash = hasher.digest(encoding);
    return hash;
};