CREATE TABLE IF NOT EXISTS signatures (
    signatureName TEXT,
    signatureEmail TEXT,
    signatureCity TEXT,
    signatureState TEXT,
    PRIMARY KEY (signatureName, signatureEmail, signatureCity, signatureState)
);