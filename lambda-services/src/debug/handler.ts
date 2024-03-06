import * as fs from 'fs';
import * as util from 'util';

const readdir = util.promisify(fs.readdir);

export async function handler(event: any, context: any, callback: any) {
    try {
        const files = await readdir('/opt');
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({ files }),
        });
    } catch (error) {
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        });
    }
}
