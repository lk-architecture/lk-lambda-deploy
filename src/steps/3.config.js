import {mkdirpSync, writeFileSync} from "fs-extra";
import execSync from "../services/exec-sync";
import log from "../services/logger";


export default function config ({sourceDir, environmentVariables}) {
    // Write environment variables in the format required by the `dotenv` npm
    // module
    const dotEnv = environmentVariables.map(({key, value}) => `${key}=${value}\n`);
    log.info("Writing environment variables");
    mkdirpSync(`${sourceDir}/tmp/bundle/`);
    execSync(`unzip -q ${sourceDir}/bundle.zip -d ${sourceDir}/tmp/bundle/`);
    writeFileSync(`${sourceDir}/tmp/bundle/.env`, dotEnv, "utf8");
    execSync(`rm ${sourceDir}/bundle.zip`);
    execSync(`zip -qr ${sourceDir}/bundle.zip ${sourceDir}/tmp/bundle/`);
    execSync(`rm -r ${sourceDir}/tmp`);
}
