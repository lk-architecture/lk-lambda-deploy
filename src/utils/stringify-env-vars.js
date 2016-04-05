export default function stringifyEnvVars (envVars) {
    const json = JSON.stringify(envVars);
    return new Buffer(json, "utf8").toString("base64");
}
