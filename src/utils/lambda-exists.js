import execSync from "../services/exec-sync";

export default function lambdaExists (awsCliEnv, lambdaName) {
    try {
        // This call will throw ResourceNotFoundException if the lambda doesn't
        // exist
        execSync(
            `aws lambda get-function --function-name ${lambdaName}`,
            {env: awsCliEnv}
        );
        return true;
    } catch (error) {
        const errorMessage = error.stderr.toString();
        if (!/ResourceNotFoundException/.test(errorMessage)) {
            throw error;
        }
        return false;
    }
}
