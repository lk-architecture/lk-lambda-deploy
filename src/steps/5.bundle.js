import execSync from "../services/exec-sync";
import log from "../services/logger";

export default function bundle ({bundleDir}) {
    // Bundle compiled code, dependencies and configuration into a zip
    log.info("Bundling code");
    execSync("zip bundle.zip -r .", {cwd: bundleDir});
}
