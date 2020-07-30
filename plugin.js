const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const slugify = require('slugify')

const svgPossum = `<svg height='1em' width='1em'  fill="#1A1A1A" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 200 200" overflow="visible" enable-background="new 0 0 200 200" xml:space="preserve" x="0px" y="0px"><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M72.656,71.094c6.556-2.377,1.936,7.833-1.562,5.078    C69.305,74.764,70.666,71.815,72.656,71.094z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M82.812,81.641c0.444-1.712-0.002-1.284-0.391-2.734    c1.066-0.285,0.786,0.776,1.562,0.781c1.657-0.386-0.556-2.38,1.172-2.344c-1.459-1.058-2.02,2.758-2.344-0.781    c2.809,1.089,2.254-2.127,0.781-3.125c2.297,0.017,0.125-4.266-1.172-5.859c-0.472-0.58-0.383,0.383-1.172,0    c-0.786-0.381-1.121-2.733-1.562-3.125c-1.931-1.714-7.201-3.114-6.25-2.344c-1.04-0.841,0.58-0.341,0-1.562    c-0.347-0.732-1.463,0.453-1.562-0.781c-0.081-1.003,3.772-6.131,4.297-4.297c0.398,1.393-0.191-0.17,3.906,1.172    c0.514,0.168,1.786,1.161,1.953,1.172c1.2,0.08,6.85-0.388,7.812,0.391c0.176,0.142-0.193,1.491,0,1.562    c2.025,0.747,4.717-0.233,6.25,0.391c0.205,0.083-0.195,1.435,0,1.562c1.22,0.797,4.029,0.561,5.469,1.172    c-0.005-0.002-0.638,0.967-0.391,1.172c0.919,0.763,2.974-0.341,5.859,0c0.34,0.039,0.908,1.161,1.172,1.172    c1.411,0.059,2.481-1.075,3.516-0.781c1.014,0.288,1.905,1.867,3.516,0.391c0.758,3.816,4.67,3.598,7.422,5.859    c2.467,2.029,4.448,5.035,6.25,8.594c2.676,5.281,6.969,10.942,6.641,16.406c-0.067,1.125-1.087,2.076-1.172,3.125    c-0.145,1.793,0.907,3.878,0.391,5.859c-0.064,0.248-1.618,1.143-1.953,1.953c-0.21,0.506,0.295,1.502,0,1.953    c-0.484,0.743-2.595,1.137-3.125,3.516c-0.248,1.119-0.137,2.774,0,3.906c0.583,4.837,3.656,10.025,3.125,15.625    c-0.453,4.778-5.172,11.934-8.203,14.453c-2.664,2.214-6.683,3.922-11.719,4.297v-1.953l-1.172-1.562    c8.599-1.387,17.704-9.484,16.406-19.922c-0.286-2.296-3.081-10.167-5.078-11.719c-0.288-0.225-0.889,0.269-0.781,0.391    c-1.275-1.446-0.881-2.557-3.125-0.781c0.166-0.816-0.268-1.034-0.391-1.562c-4.723,0.355-3.445,6.711-8.203,7.031    c-0.382-2.067,1.491-2.938,0.781-4.688c-0.167-0.415-1.358-0.295-1.562-0.781c-0.479-1.143,0.79-3.63-1.953-3.516    c-0.562-2.354,1.652-3.031,0-4.297l1.237-0.847l-0.065-1.497c-0.167-2.307,2.276,0.029,2.344-1.562    c-1.451-1.908-2.732-3.473-4.297-5.469c0.16,0.203-0.641,0.484-0.781,0.391c-0.643-0.428-0.128-2.503-0.391-2.734    c-0.84-0.74-3.649-1.597-4.688-1.172c-0.759,0.312-0.26,1.673-1.172,2.344c-0.615,0.452-1.925-0.113-1.562,1.562l-1.758-0.195    l0.195,1.758c-1.646,1.089-0.656,2.518-1.172,3.516c0.003-0.006-0.738-1.127-1.172-0.781c-1.737,1.38,2.426,3.584,1.562,6.641    c-2.297,0.166-2.241-2.812-3.906-3.125c-0.754-0.143-0.934,0.68-1.562,0.391c-2.657-1.228-4.629-4.016-8.984-4.297    c0.632-2.232,4.039-1.69,5.859-2.734c0.957,0.484-1.171,1.136-1.172,1.953c1.83-0.047,2.095-0.104,3.906,1.172    c-1.013-2.502-1.386-5.646-4.297-6.25l-0.898-0.586l-1.055,0.195c-1.148-2.223-4.817-0.547-6.641,0    c-0.627-1.421,3.539-1.4,5.469-1.562c-1.568-1.687-3.617-2.894-3.516-6.25l1.107-1.237l1.237-1.107    c1.006,4.331,9.017,7.041,10.156,3.125c-0.152,0.521-1.091-3.686-1.172-3.906c0.072,0.197-1.658-2.188-1.953-3.516    c-1.663,1.723-3.748,3.023-3.906,6.25c-0.624-1.069-1.459-1.928-1.953-3.125l1.319-1.367L82.812,81.641z M85.547,66.016    c2.118-2.753-0.759-7.996-3.125-7.422C84.451,60.081,83.826,64.221,85.547,66.016z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M66.081,63.086l-1.237,0.195c-0.407-4.052-6.191-4.702-4.297-9.766    c4.327,0.559,8.412,5.14,12.109,2.734c0.834,1.415-1.301,0.619-1.953,1.562c-1.167,1.689-0.618,5.659-3.516,5.859L66.081,63.086z"></path><g><path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#1A1A1A" stroke-width="3.4274" stroke-linecap="round" d="     M112.891,148.438c-2.93,0.941-8.543-0.48-7.487-4.362"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#1A1A1A" stroke-width="2.4227" stroke-linecap="round" d="     M109.05,106.185c-4.04-3.144-8.452-5.179-12.37-8.333"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#1A1A1A" stroke-width="2.264" stroke-linecap="round" d="     M85.04,95.508c-0.451,2.961-4.608,2.478-6.719,1.641"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#1A1A1A" stroke-width="1.991" stroke-linecap="round" d="     M79.804,84.649c-4.769-2.185-16.284,6.057-19.073,0.968c-1.211-2.213,2.848-7.185,3.689-11.423     c0.841-4.229,0.782-7.526,1.66-11.107"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#1A1A1A" stroke-width="2.9237" stroke-linecap="round" d="     M79.804,84.649c1.063-1.346,2.651-1.888,4.327-1.641"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#1A1A1A" stroke-width="3.5056" stroke-linecap="round" d="     M79.804,84.649c0.144,0.838,0.296,1.375,0.6,2.005"></path></g></g></g></svg>`


module.exports = function(eleventyConfig, options = {}) {

    eleventyConfig.addCollection("lwjPosts", function(collectionApi) {
        return collectionApi.getFilteredByTag("lwjPost");
    });
    eleventyConfig.addFilter('limit', (content, count) => {
        return content.splice(0, count)
    })
    eleventyConfig.addPairedShortcode('size', (content, size) => {
        return `<span style="font-size: ${size}">${content}</span>`
    })

    eleventyConfig.addPairedShortcode('blockquote', (content, person="", citation="", classList=options.blockquoteClass) => {
        const markup = (
            `<figure class="${classList}">
                <blockquote>
                    ${content.trim()}
                </blockquote>
                <figcaption>
                    - ${person}, <cite>${citation}</cite>
                </figcaption>
            </figure>`
        )
        
        return markup
    })


    eleventyConfig.addTransform("headerBookmarks", function(content, outputPath) {
        const headerFileType = options.headerFileType || "html";
        const headerSelectors = options.headerSelectors || "h1, h2, h3";

        console.log('selectors', headerSelectors);
        if( outputPath.endsWith(`.${headerFileType}`) ) {
            const DOM = new JSDOM(content);
            const document = DOM.window.document;

            const headings = [...document.querySelectorAll(headerSelectors)]

            headings.forEach(heading => {
                const headerContent = heading.textContent;
                const slug = `heading-${slugify(headerContent)}`

                const anchor = document.createElement('a');
                anchor.innerHTML = svgPossum;

                anchor.setAttribute('href', `#${slug}`);
                heading.setAttribute('id', `${slug}`)
                
                heading.appendChild(anchor);
            })
            
            return '<!DOCTYPE html>\r\n' + document.documentElement.outerHTML;
        }

        return content
        
       
    });

};