# Summarizer

Blog Summarizer is a web application built with React and Redux that utilizes the article-extractor-and-summarizer Rapid API to summarize articles and blog posts. The application allows users to enter a URL for an article or blog post and get a summary of the content.

## Getting Started

To get started with the application, you will need to have Node.js installed on your system. Clone the repository and install the required packages using npm:

```
git clone https://github.com/BaibhavTiwari/Summarizer.git
cd Summarizer
npm install
```

You will also need to sign up for a RapidAPI account and get your API key for the article-extractor-and-summarizer API.

## Using the Application

Create a new .env file in the root folder of the project and add the fallowing line in it.
`VITE_RAPID_API_ARTICLE_KEY = "enter your api key"` and replace the `"enter your api key"` with your api key.

To use the application, start the development server using the following command:

```
npm run dev
```

Open your browser and navigate to `http://localhost:5173/?` to access the application.

To summarize an article or blog post, enter the URL into the input field and click the "Summarize" button. The summary will be displayed on the page.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Please follow the existing code style and include tests for any new functionality.
