import {BUNDLES_DIRECTORY, SOURCES_DIRECTORY} from "./config";
import setup from "./steps/0.setup";
import getSource from "./steps/1.get-source";
import compileSources from "./steps/2.compile-sources";
import installDependencies from "./steps/3.install-dependencies";
import writeEnvironmentVariables from "./steps/4.write-environment-variables";
import bundle from "./steps/5.bundle";
import deploy from "./steps/6.deploy";
import parseGithubRef from "./utils/parse-github-ref";

export default function lkLambdaDeploy (options) {
    const {org, repo, commit} = parseGithubRef(options.githubRef);
    const sourceDir = `${SOURCES_DIRECTORY}/${org}/${repo}/${commit}`;
    const bundleDir = `${BUNDLES_DIRECTORY}/${org}/${repo}/${commit}`;
    const commonOptions = {
        ...options, org, repo, commit, sourceDir, bundleDir
    };
    setup(commonOptions);
    getSource(commonOptions);
    compileSources(commonOptions);
    installDependencies(commonOptions);
    writeEnvironmentVariables(commonOptions);
    bundle(commonOptions);
    deploy(commonOptions);
}

export {default as stringifyEnvVars} from "./utils/stringify-env-vars";
export {default as parseEnvVars} from "./utils/parse-env-vars";
