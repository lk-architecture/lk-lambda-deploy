import {emptyDirSync} from "fs-extra";
import log from "../services/logger";

export default function setup ({bundleDir, sourceDir}) {
    // Create the necessary directories
    log.info(`Creating directory ${bundleDir}`);
    emptyDirSync(bundleDir);
    log.info(`Creating directory ${sourceDir}`);
    emptyDirSync(sourceDir);
}
