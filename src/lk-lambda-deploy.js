import {SOURCES_DIRECTORY} from "./config";
import setup from "./steps/0.setup";
import clone from "./steps/1.clone";
import build from "./steps/2.build";
import config from "./steps/3.config";
import deploy from "./steps/4.deploy";
import parseGithubRef from "./utils/parse-github-ref";

export default function lkLambdaDeploy (options) {
    const {org, repo, commit} = parseGithubRef(options.githubRef);
    const sourceDir = `${SOURCES_DIRECTORY}/${org}/${repo}/${commit}`;
    const commonOptions = {
        ...options, org, repo, commit, sourceDir
    };
    setup(commonOptions);
    clone(commonOptions);
    build(commonOptions);
    config(commonOptions);
    deploy(commonOptions);
}

export {default as stringifyEnvVars} from "./utils/stringify-env-vars";
export {default as parseEnvVars} from "./utils/parse-env-vars";
