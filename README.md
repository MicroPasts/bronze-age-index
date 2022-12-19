# The Bronze Age Implement Index

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.7456895.svg)](https://doi.org/10.5281/zenodo.7456895)

![The MicroPasts logo file](https://live.staticflickr.com/7452/12071276593_f35b8d8215_w.jpg)

This repository contains the code for the website that provides an interface for the [MicroPasts](https://micropasts.org) generated Bronze Age Implement Index
data, combined with [Portable Antiquities Scheme](https://finds.org.uk) data. This website is a Gatsby 5 project, using CSV and markdown files to generate the
web pages, with images sourced from [Flickr](https://flickr.com/micropasts) and the [PAS database](https://finds.org.uk). Search is provided using [Meilisearch](https://www.meilisearch.com/)
installed on a free tier AWS t2.micro instance, coupled with React InstantSearch.

This project comes about from a partnership between the [Institute of Archaeology](https://www.ucl.ac.uk/archaeology), University College London, the [British Museum](https://britishmuseum.org) and the Portable Antiquities Scheme,
and it was funded by the Arts and Humanities Research Council between 2013 and 2017.

The project was led by Professor Andrew Bevan and Professor Daniel Pett. Team members included Dr Jennifer Wexler, Dr Newil Wilkin, Dr Chiara Bonnachi, Dr Adi Kienan-Schoonbaert,
Dr Neil Wilkin, and Dr Rachel Sparks. Most of the team have moved from their host organisations now, but the project continues to be supported
by the members using their own time and resources. Wherever possible, we have tried to acknowledge the contributions of
the team members in the code and the data and we have used free and open source products and services to run our work.

The code for this project was written by Daniel Pett (standing on the shoulders of giants). The [mapping interface](https://github.com/MicroPasts/mapping-the-bronze-age) for this
project is generated on top of the [Peripleo product](https://github.com/britishlibrary/peripleo-lanc), written by [Rainer Simon](https://rainersimon.io) and funded by the
British Library as part of their [Locating a National Collection project](https://www.bl.uk/projects/locating-a-national-collection).

**You are encouraged to remix and reuse any of the code and data in this repository.**

## 🚀 Quick start

How to get this working on your machine.

1.  **Install Node, NPM and Gatsby**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli))

    ```shell
    # create a clone of this site (you might want to exclude the gh-pages branch as it is LARGE)
    git clone --single-branch --branch main https://github.com/MicroPasts/bronze-age-index
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd bronze-age-index/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).
2.  **Build the site**
    Set up search integration and then build
    ```shell
    touch .env.production
    nano .env.production #set the environment variables for production SEARCH_URL='' and API_KEY='' and whether you want to index on build INDEX='true/false'
    gatsby build
    ```

    An example .env.production file looks like:

    ```text
    SEARCH_URL='https://your-search.url'
    API_KEY='abcdefg'
    INDEX=true
    ```

3.  **Test the site locally**

    ```shell
    gatsby serve
    ```
    Your site is now running at `http://localhost:9000` or it may  ask you to use another port.

4.  **Deploy the site**

    ```shell
    gatsby deploy
    ```

    Or if you have already built and cannot be  bothered to wait again:

    ```shell
    npm run pages
    ```
    Deploy time is around 10-15 mins on a decent speed machine. If on an old mac, you may need to tune ulimit or just not bother...

    You may need to clear the gh-pages cache to avoid the mega annoying _EMFILE: too many open files, open_ error (or change your maxfile limit). To do this run:

    ```shell
    node node_modules/gh-pages/bin/gh-pages-clean
    npm run pages
    ```

## 🗂️ Some background to data wrangling

The site is powered off two CSV files and a variety of markdown files for pages. The CSV files contain all the data that has been cleaned and enhanced from the Bronze Age Implement Index MicroPasts projects and from a data export from the Portable Antiquities Scheme.

To speed up page creation on the system, I split the CSV file into smaller chunks. To do this, a python 3 file is included. If you are editing data, edit the CSV file at the root of data and then run these commands:

    1. pas.csv has changed

    ```shell
    python3 split.py pas.csv split pas 500
    ```

    2. bai.csv has changed

    ```shell
    python3 split.py bai.csv split bai 500
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a typical Gatsby project.

    .
    ├── node_modules
    ├── src   
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”. This contains the data with CSV and markdown files that generate site pages and scripts for splitting the csv files.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.
