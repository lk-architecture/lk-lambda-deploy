export default function parseEnvVars (envVarsString) {
    const json = new Buffer(envVarsString, "base64").toString("utf8");
    return JSON.parse(json);
}
