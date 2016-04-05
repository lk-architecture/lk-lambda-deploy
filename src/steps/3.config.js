import {writeFileSync} from "fs-extra";
import log from "../services/logger";

export default function config ({sourceDir, environmentVariables}) {
    // Write environment variables in the format required by the `dotenv` npm
    // module
    const dotEnv = environmentVariables.map(({key, value}) => `${key}=${value}\n`);
    log.info("Writing environment variables");
    // TODO inject into bundle.zip
    writeFileSync(`${sourceDir}/.env`, dotEnv, "utf8");
}
