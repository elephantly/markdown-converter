# Markdown converter
[![apm](https://img.shields.io/apm/l/atom-kahlan.svg?style=flat-square)](https://opensource.org/licenses/MIT)

This project is a markdown converter. It allows you to convert a README into a site and use it for a github page.
The gulp tasks will allow you to convert directly the README to a site without a nav or to convert your README to a nunjucks file, organize it by blocks yourself and then compile it.

### How to use it

#### Requirements

Here are the requirements to use it in a project:
* npm
* gulp
* nunjucks

#### Installing the project

```shell
npm install elephantly-markdown-converter
```

#### Setting your project parameters

Complete the parameters.json file with your project values.
```json
"pageTitle" : "Your Project Name",
"repositoryUrl" : "http://your-repository.url"
```

#### Using gulp tasks

To convert the readme to nunjucks use:
```shell
gulp convert
```
You can then organize your html into blocks (see the composition of [layout](layout.njk))

To compile the nunjucks file to an html file use:
```shell
gulp compile
```

If you want to directly create a site from the README without a nav:
```shell
gulp site
```


Once your index.html is ready, go to [https://pages.github.com/](https://pages.github.com/) to publish your site then :smile:

Enjoy :smile:
