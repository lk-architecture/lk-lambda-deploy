import execSync from "../services/exec-sync";
import log from "../services/logger";

export default function build ({sourceDir}) {
    log.info("Building lambda");
    execSync(`/bin/sh ${sourceDir}/Lambdafile`);
}
