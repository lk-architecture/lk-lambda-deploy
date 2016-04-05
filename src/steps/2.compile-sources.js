import {resolve} from "path";
import execSync from "../services/exec-sync";
import log from "../services/logger";

export default function compileSources ({bundleDir, sourceDir}) {
    // Compile source files with babel
    const babel = resolve(__dirname, "../node_modules/.bin/babel");
    log.info("Compiling source files with babel");
    execSync(`${babel} ${sourceDir}/src -d ${bundleDir}`);
}
