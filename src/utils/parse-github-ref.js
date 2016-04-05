export default function parseGithubRef (ref) {
    // A github ref has the following format: org/repo@commit
    const slashIndex = ref.indexOf("/");
    const atIndex = ref.indexOf("@");
    return {
        org: ref.slice(0, slashIndex),
        repo: ref.slice(slashIndex + 1, atIndex),
        commit: ref.slice(atIndex + 1)
    };
}
