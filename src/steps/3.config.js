import {writeFileSync} from "fs-extra";
import execSync from "../services/exec-sync";
import log from "../services/logger";

export default function config ({sourceDir, environmentVariables}) {
    // Write environment variables in a .env file and add it to the bundle.zip
    const dotEnv = environmentVariables.map(({key, value}) => `${key}=${value}\n`);
    log.info("Writing environment variables");
    writeFileSync(`${sourceDir}/.env`, dotEnv, "utf8");
    log.info("Adding .env file to zip");
    execSync("zip bundle.zip .env", {cwd: sourceDir});
}
