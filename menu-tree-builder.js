/*
{
  "menu":[
    {
      "text":"home",
      "link":"https://google.com",
      "children":[
        {
          "text":"Home-child",
          "link":"https://google.com",
          "children":[
            {
              "text":"home-child-child",
              "link":"https://uottawa.ca",
              "children":null
            },
            {
              "text":"home-child-chidfsdfsdf-2",
              "link":"https://piano.uottawa.ca",
              "children":null
            }
          ]
        },
        {
          "text":"home-chi-2",
          "link":"https://uottawa.ca",
          "children":null
        },
        {
          "text":"home-chi 3",
          "link":"https://uottawa.ca",
          "children":null
        },
        {
          "text":"Home-child",
          "link":"https://google.com",
          "children":[
            {
              "text":"home-child-child",
              "link":"https://uottawa.ca",
              "children":null
            },
            {
              "text":"home-child-chi-2",
              "link":"https://piano.uottawa.ca",
              "children":null
            }
          ]
        },
        {
          "text":"home-chi 3",
          "link":"https://uottawa.ca",
          "children":null
        }
      ]
    },
    {
      "text":"page 1",
      "link":"https://google.com",
      "children":null
    },
    {
      "text":"contact",
      "link":"https://google.com",
      "children":null
    }
  ]
}
*/



/*build a menu tree with:
Unordered list elements ul and li
a JSON object
depth first traversal through the JSON object

This assumes the JSON object is formatted before passing into the function:

*/


let jsonData = '{"menu":[{"text":"home","link":"https://google.com","children":[{"text":"Home-child","link":"https://google.com","children":[{"text":"home-child-child","link":"https://uottawa.ca","children":null},{"text":"home-child-chisdfsdf-2","link":"https://piano.uottawa.ca","children":null}]},{"text":"home-chi-2","link":"https://uottawa.ca","children":null},{"text":"home-chi 3","link":"https://uottawa.ca","children":null},{"text":"Home-child","link":"https://google.com","children":[{"text":"home-child-child","link":"https://uottawa.ca","children":null},{"text":"home-child-chi-2","link":"https://piano.uottawa.ca","children":null}]},{"text":"home-chi 3","link":"https://uottawa.ca","children":null}]},{"text":"page-1","link":"https://google.com","children":null},{"text":"contact","link":"https://google.com","children":null}]}'
let jsObjUn = JSON.parse(jsonData);
let jsObj = jsObjUn.menu;

var liCreator = (singleMenuElement) => {
    let liElem = document.createElement('li');
    let aElem = document.createElement("a");
    let txtNode = document.createTextNode(singleMenuElement.text);
    aElem.appendChild(txtNode);
    aElem.href = singleMenuElement.link;
    liElem.appendChild(aElem);
    return liElem;
};

var ulTreeBuilder = (arrObjs) => {
    let ulParent = document.createElement('ul');
    for (let i = 0; i < arrObjs.length; i++) {
        let liSingle = liCreator(arrObjs[i]);
        if (arrObjs[i].children) {
            let ulWithChildren = ulTreeBuilder(arrObjs[i].children);
            liSingle.appendChild(ulWithChildren);
        }
        ulParent.appendChild(liSingle)
    }
    return ulParent;
};

let a = ulTreeBuilder(jsObj);
console.log(a);