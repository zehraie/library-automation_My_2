export class BrowserUtility {

    static async sleep(seconds){
        await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }
// create a fuction that can verify
//expected and actual message and return promise
    // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...
    static async verifyMessages(actual, expected) {
        return new Promise((resolve) => {
            resolve(expected === actual);
          });
}}

