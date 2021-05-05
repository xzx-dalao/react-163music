// const devBaseURL="http://123.207.32.32:9001";
// const proBaseURL="http://123.207.32.32:9001";

const proBaseURL="http://119.23.233.90:4000";
const devBaseURL="http://119.23.233.90:4000";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

// export const TIMEOUT=1000;