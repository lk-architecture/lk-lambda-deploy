import {emptyDirSync, mkdirpSync} from "fs-extra";
import log from "../services/logger";

export default function setup ({sourceDir}) {
    // Create the necessary directories
    log.info(`Creating directory ${sourceDir}`);
    mkdirpSync(sourceDir);
    emptyDirSync(sourceDir);
}
