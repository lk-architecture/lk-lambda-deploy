import execSync from "../services/exec-sync";
import log from "../services/logger";

export default function installDependencies ({bundleDir, sourceDir}) {
    // Install npm dependencies
    log.info("Copying package.json into place");
    execSync(`cp ${sourceDir}/package.json ${bundleDir}`);
    log.info("Installing dependencies");
    execSync("npm install --production", {cwd: bundleDir});
}
