let jsonTranslate:JSON;
let baseLang:string = "en";

/**
 * 
 * @returns String | null
 */
const getMetaFile = () => {
    const element: HTMLElement | null = document.querySelector('meta[name="h-translate"]');
    if (element instanceof HTMLMetaElement) {
        return element.content;
    }
    return null;
}

const getLang = () => {
    let userLang = navigator.language; 
    return userLang;
}

const getFileTranslate = async () => {
    let langFile:String = getLang();
    
    if(baseLang != langFile){
        let metaFile = await getMetaFile();
        if(metaFile != null){
            langFile = langFile+'.'+metaFile;
        }
        try {
            const response = await fetch('langs/'+langFile+'.json');
        
            if (!response.ok) {
              throw new Error('Error loading the JSON file');
            }
        
            const data = await response.json();
            return data;
        } catch (error) {
            return {};
        }
    }

    return {};

}

export const config = (config: { [x: string]: string; }) => {
    for (const key in config) {
        if (Object.prototype.hasOwnProperty.call(config, key)) {
            const element = config[key];
            switch (key) {
                case "baseLang":
                    baseLang = element;
                    break;
            }
        }
    }
}

/**
 * 
 * @param text string
 * @param impType string // normal, element,  
 * @returns 
 */
export const translate = async (text:String, impType:string = "normal", querySelector:string) => {
    if(jsonTranslate == undefined){
        jsonTranslate = await getFileTranslate();
    }
    switch (impType) {
        case "element":
            const element: HTMLElement | null = document.querySelector(querySelector);
            if (element instanceof HTMLElement) {
                let textTrans = (jsonTranslate[text as keyof typeof jsonTranslate] || text);
                element.innerHTML = element.innerHTML.replace(`${text}`, `${textTrans}`);
            }
            break;

        case "normal":
        default:
            return (jsonTranslate[text as keyof typeof jsonTranslate] || text);
            break;
    }
}