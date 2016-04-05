export const NODE_ENV = process.env.NODE_ENV || "development";
export const LOG_LEVEL = process.env.LOG_LEVEL || "info";
export const BUNDLES_DIRECTORY = (
    process.env.BUNDLES_DIRECTORY || `${process.env.HOME}/lk-deploy/bundles`
);
export const SOURCES_DIRECTORY = (
    process.env.SOURCES_DIRECTORY || `${process.env.HOME}/lk-deploy/sources`
);
