import fetchGoogle from './fetch-google';


export default async (event, context, callback) => {

  const google = await fetchgoogle();
  callback(null, ['hello world!', google]);
}
