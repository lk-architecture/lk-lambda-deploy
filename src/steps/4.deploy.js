import execSync from "../services/exec-sync";
import log from "../services/logger";
import lambdaExists from "../utils/lambda-exists";

export default function deploy (options) {
    const {
        awsAccessKeyId,
        awsSecretAccessKey,
        awsRegion,
        lambdaName,
        lambdaRole,
        sourceDir
    } = options;
    // Create/update the lambda function
    const awsCliEnv = {
        AWS_ACCESS_KEY_ID: awsAccessKeyId,
        AWS_SECRET_ACCESS_KEY: awsSecretAccessKey,
        AWS_DEFAULT_REGION: awsRegion
    };
    switch (lambdaExists(awsCliEnv, lambdaName)) {
    case false:
        // Create the function
        log.info(`Lambda ${lambdaName} doesn't exist.`);
        log.info(`Creating lambda ${lambdaName}`);
        execSync([
            "aws lambda create-function",
            `--function-name ${lambdaName}`,
            "--runtime nodejs",
            `--role ${lambdaRole}`,
            "--handler index.handler",
            `--zip-file ${sourceDir}/bundle.zip`
        ].join(" "), {env: awsCliEnv});
        break;
    case true:
        // Update function code
        log.info(`Lambda ${lambdaName} already exists`);
        log.info(`Updating function code for lambda ${lambdaName}`);
        execSync([
            "aws lambda update-function-code",
            `--function-name ${lambdaName}`,
            `--zip-file ${sourceDir}/bundle.zip`
        ].join(" "), {env: awsCliEnv});
        // Update function configuration (just the role for now)
        log.info(`Updating function configuration for lambda ${lambdaName}`);
        execSync([
            "aws lambda update-function-configuration",
            `--function-name ${lambdaName}`,
            `--role ${lambdaRole}`
        ].join(" "), {env: awsCliEnv});
        break;
    }
}
