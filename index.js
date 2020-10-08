const Api = require("./utils/api");
const Print = require("./view/print");
const Template = require("./view/template");
const Questions = require("./model/questions");
const File = require("./utils/file");

const api = new Api();
const print = new Print();
const template = new Template();
const questions = new Questions();
const file = new File();

(async () => {
    try {
        const userResponses = await print.questions(
            questions.getUserQuestions()
        );
        print.info(`Your responses: ${JSON.stringify(userResponses)}`);
        print.info(
            "Thank you for your responses! Fetching your GitHub data next..."
        );

        const userInfo = await api.getUser(userResponses);
        print.info(`Your GitHub user info: ${JSON.stringify(userInfo.data)}`);

        print.info("Generating your README next...");

        const markdown = template.generateMarkdown(userResponses, userInfo);
        print.info(markdown);

        const fileName = "README.md";
        await file.writeToFileAsync(fileName, markdown);
    } catch (err) {
        print.err(err);
    }
})();
