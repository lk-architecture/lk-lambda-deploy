import execSync from "../services/exec-sync";
import log from "../services/logger";

export default function compileSources ({bundleDir, sourceDir}) {
    // Compile source files with babel
    log.info("Compiling source files with babel");
    execSync(`$(npm bin)/babel ${sourceDir}/src -d ${bundleDir}`);
}
