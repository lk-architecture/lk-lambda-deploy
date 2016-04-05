#!/usr/bin/env node

import yargs from "yargs";
import lkLambdaDeploy from "../lk-lambda-deploy";
import parseEnvVars from "../utils/parse-env-vars";

const argv = yargs
    .help("help")
    .wrap(100)
    .usage("Usage: $0 <options>")
    .option("awsAccessKeyId", {
        demand: true,
        type: "string"
    })
    .option("awsSecretAccessKey", {
        demand: true,
        type: "string"
    })
    .option("awsRegion", {
        demand: true,
        describe: "AWS region to deploy to",
        type: "string"
    })
    .option("githubRef", {
        demand: true,
        describe: "Github code reference. Format: org/repo@commit",
        type: "string"
    })
    .option("lambdaName", {
        demand: true,
        describe: "Name of the lambda function",
        type: "string"
    })
    .option("lambdaRole", {
        demand: true,
        describe: "Role of the lambda function",
        type: "string"
    })
    .option("environmentVariables", {
        default: "[]",
        describe: "List of envVars key-pairs",
        type: "string"
    })
    .argv;

lkLambdaDeploy({
    ...argv,
    environmentVariables: parseEnvVars(argv.environmentVariables)
});
