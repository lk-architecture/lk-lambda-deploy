import execSync from "../services/exec-sync";
import log from "../services/logger";

export default function getSource ({org, repo, commit, sourceDir}) {
    // Download and unzip code from github
    const archiveUrl = `https://github.com/${org}/${repo}/archive/${commit}.tar.gz`;
    log.info(`Getting source code from ${archiveUrl}`);
    execSync(`curl ${archiveUrl} -L | tar xz --strip-components 1 -C ${sourceDir}`);
}
